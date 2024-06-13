import React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';

const CatImage = ({ uri, numberOfColumns }) => {
  const { width } = Dimensions.get('window');
  const buttonWidth = width * 0.8;
  
  let imageSize;
  if (numberOfColumns === 1) {
    imageSize = buttonWidth;
  } else {
    imageSize = (buttonWidth / numberOfColumns) - 10;
  }

  return (
    <View style={[styles.imageContainer, { width: imageSize }]}>
      <Image source={{ uri: uri }} style={[styles.image, { width: imageSize, height: imageSize }]} />
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
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#011F51',
  },
});

export default CatImage;
