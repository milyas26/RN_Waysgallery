import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const ThumbnailArt = ({ img, onPress, avatar, user, title }) => {
  return (
    <TouchableOpacity style={styles.thumbnail} onPress={onPress}>
      <Image source={img} style={styles.image} />
    </TouchableOpacity>
  )
}

export default ThumbnailArt

const styles = StyleSheet.create({
  image: {
    height: 230,
    width: '100%',
    marginBottom: 10,
  },

  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
  },
})
