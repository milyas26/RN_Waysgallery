import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILLogo, Background } from '../../assets'
import { Button } from '../../components'

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={Background} style={styles.main}>
      <View>
        <ILLogo />
        <Text style={styles.text}>
          Cari inspirasi design, dan temukan para professional.
        </Text>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={{ height: 16 }} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  main: {
    padding: 40,
    flex: 1,
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 28,
    marginTop: 120,
    color: '#000',
    fontWeight: '700',
  },
  buttons: {
    height: 110,
  },
})
