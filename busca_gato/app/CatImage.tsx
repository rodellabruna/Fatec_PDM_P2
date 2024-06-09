// import React, { useEffect, useState } from 'react';
// import { Image, StyleSheet, View } from 'react-native';
 
// const CatImage = () => {
//   const [catImage, setCatImage] = useState(null);
 
//   useEffect(() => {
//     const fetchCatImage = async () => {
//       const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
//       const api_key = "DEMO_API_KEY"; // Substitua pelo seu API Key se tiver
 
//       try {
//         const response = await fetch(url, {
//           headers: {
//             'x-api-key': api_key
//           }
//         });
//         const data = await response.json();
//         setCatImage(data[0].url);
//       } catch (error) {
//         console.error(error);
//       }
//     };
 
//     fetchCatImage();
//   }, []);
 
//   if (!catImage) {
//     return null; // Ou algum tipo de indicador de carregamento
//   }
 
//   return (
//     <View style={styles.imageContainer}>
//       <Image source={{ uri: catImage }} style={styles.image} />
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//   },
//   image: {
//     width: 300,
//     height: 300,
//     borderRadius: 10,
//   }
// });
 
// export default CatImage;

import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
 
const CatImage = () => {
  const [catImage, setCatImage] = useState(null);
 
  useEffect(() => {
    const fetchCatImage = async () => {
      const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
      const api_key = "DEMO_API_KEY"; 
 
      try {
        const response = await fetch(url, {
          headers: {
            'x-api-key': api_key
          }
        });
        const data = await response.json();
        setCatImage(data[0].url);
      } catch (error) {
        console.error(error);
      }
    };
 
    fetchCatImage();
  }, []);
 
  if (!catImage) {
    return null; // Ou algum tipo de indicador de carregamento
  }
 
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: catImage }} style={styles.image} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  }
});
 
export default CatImage;