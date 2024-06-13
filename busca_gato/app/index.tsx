import React, { useState, useEffect } from 'react';
import {
  FlatList,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CatImage from './CatImage';
import { API_KEY } from '@env';
import AcessoGitHub from './AcessoGitHub';

function calculateNumberOfColumns() {
  const { width } = Dimensions.get('window');
  if (width > 1024) {
    return 3;
  } else if (width > 768) {
    return 2;
  } else {
    return 1;
  }
}

export default function App() {
  const [buttonColor, setButtonColor] = useState('#011F51');
  const [catImages, setCatImages] = useState([]);
  const [numberOfColumns, setNumberOfColumns] = useState(calculateNumberOfColumns());
  const [key, setKey] = useState(1);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      setNumberOfColumns(calculateNumberOfColumns());
      setKey(prevKey => prevKey + 1);
    });

    return () => subscription.remove();
  }, []);

  const handleButtonPress = async () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=5`;

    try {
      const response = await fetch(url, {
        headers: {
          'x-api-key': API_KEY,
        },
      });
      const data = await response.json();
      setCatImages(prevImages => [...prevImages, ...data.map(cat => cat.url)]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={() => setButtonColor('#018C9B')}
        onPressOut={() => setButtonColor('#011F51')}
        onPress={handleButtonPress}
        style={[styles.button, { backgroundColor: buttonColor }]}
      >
        <Text style={styles.buttonText}>{`Buscar Gatos`}</Text>
      </Pressable>
      <FlatList
        key={key}
        data={catImages}
        renderItem={({ item }) => <CatImage uri={item} numberOfColumns={numberOfColumns} />}
        keyExtractor={(item) => item}
        numColumns={numberOfColumns}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <AcessoGitHub />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6EADA2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  button: {
    width: '80%',
    padding: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
