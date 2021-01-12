import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Header, Input, Link } from '../../components'

const Register = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header label="Register" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View>
          <ILLogo />
          {/* <Text style={styles.text}>Let's Get Started!</Text> */}
          <View style={{ height: 20 }} />
          <Input label="Email" />
          <View style={{ height: 20 }} />
          <Input label="Password" />
          <View style={{ height: 20 }} />
          <Input label="Full Name" />
        </View>
        <View>
          <View style={styles.buttons}>
            <Button title="Register" />
          </View>
          <View style={{ height: 15 }} />
          <Link
            label="Already have an account? Click here."
            size={16}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 30,
    color: '#2FC4B2',
  },
  buttons: {
    height: 50,
  },
})
