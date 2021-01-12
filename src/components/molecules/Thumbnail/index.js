import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Thumbnail = ({ img, onPress, avatar, user, title }) => {
  return (
    <TouchableOpacity style={styles.thumbnail} onPress={onPress}>
      <View style={styles.detail}>
        <Image style={styles.avatar} source={avatar} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text>{user}</Text>
        </View>
      </View>
      <Image source={img} style={styles.image} />
    </TouchableOpacity>
  )
}

export default Thumbnail

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

  thumbnail: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    paddingBottom: 10,
    marginBottom: 10,
  },
})
