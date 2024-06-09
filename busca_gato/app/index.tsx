import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import CatImage from './CatImage';
 
export default function App() {
  const [buttonColor, setButtonColor] = useState('#011F51');
  const [showCatImages, setShowCatImages] = useState(false);
 
  const handleButtonPress = () => {
    setShowCatImages(true);
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
      {showCatImages && (
        <FlatList
          data={[...Array(5).keys()]}
          renderItem={({ item }) => <CatImage key={item} />}
          keyExtractor={(item) => item.toString()}
          horizontal
        />
      )}
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