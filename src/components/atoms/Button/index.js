import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ title, type, onPress }) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? '#E7E7E7' : '#2FC4B2',
    paddingVertical: 10,
    borderRadius: 10,
    flex: 1,
  }),

  text: (type) => ({
    color: type === 'secondary' ? '#000' : '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  }),
})
