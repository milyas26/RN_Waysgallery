import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Link = ({ label, size, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size)}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
  text: (size) => ({
    color: '#7d8797',
    fontSize: size,
    textDecorationLine: 'underline',
  }),
})
