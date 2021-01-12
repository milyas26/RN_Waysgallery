import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ILLogo } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2000)
  }, [])

  return (
    <View style={styles.page}>
      <ILLogo />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
