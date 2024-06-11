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
 const [catImages, setCatImages] = useState([]);
 
 const handleButtonPress = () => {
   const newCatImages = [...catImages];
   for (let i = 0; i < 5; i++) {
     newCatImages.push({ id: newCatImages.length + i, uri: "https://api.thecatapi.com/v1/images/search?limit=1" });
   }
   setCatImages(newCatImages);
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
       data={catImages}
       renderItem={({ item }) => <CatImage uri={item.uri} />}
       keyExtractor={(item) => item.id.toString()}
     />
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