import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { ICBack, ILLogo } from '../../../assets'

const Header = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={ICBack} />
      </TouchableOpacity>
      <Text style={styles.text}>{label}</Text>
      <View style={{ width: 36 }} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  image: {
    height: 36,
    width: 36,
  },
})
