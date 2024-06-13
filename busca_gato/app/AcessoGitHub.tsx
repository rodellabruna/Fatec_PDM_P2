import React from 'react'
import {
  Pressable, 
  View,
  StyleSheet, 
  Text, 
  Platform
} from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons';
import * as Linking from 'expo-linking';


const AcessoGitHub = () => {

  const openURL = (url: string): void => {
    if (Platform.OS === 'web'){
      window.open(url, '_blank')
    }
    else{
      Linking.openURL(url)
    }
  }
  return (
    <View
      style={styles.logos}>
        <Pressable
          onPress={() => openURL('https://github.com/rodellabruna/Fatec_PDM_P2')}>
          <Ionicons name='logo-github' size={25} color='#011F51'/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  logos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  }
})

export default AcessoGitHub