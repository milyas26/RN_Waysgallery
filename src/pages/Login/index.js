import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Header, Input, Link } from '../../components'

const Login = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header label="Login" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View>
          <ILLogo />
          {/* <Text style={styles.text}>Login</Text> */}
          <View style={{ height: 25 }} />
          <Input label="Email" />
          <View style={{ height: 25 }} />
          <Input label="Password" />
          <View style={{ height: 10 }} />
          <Link label="Forgot your password?" size={15} />
        </View>
        <View>
          <View style={styles.buttons}>
            <Button
              title="Sign In"
              onPress={() => navigation.replace('MainApp')}
            />
          </View>
          <View style={{ height: 15 }} />
          <Link
            label="Don't have an account? Click here."
            size={16}
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  )
}

export default Login

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
    marginTop: 40,
    marginBottom: 30,
    color: '#2FC4B2',
  },
  buttons: {
    height: 50,
  },
})
