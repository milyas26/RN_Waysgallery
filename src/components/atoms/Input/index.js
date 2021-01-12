import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const Input = ({ label, type }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input(type)} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 6,
    color: '#7d8797',
  },
  input: (type) => ({
    borderRadius: 5,
    borderColor: '#2FC4B2',
    borderWidth: 1,
    height: type === 'textarea' ? 120 : 45,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  }),
})
