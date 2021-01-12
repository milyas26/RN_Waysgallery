import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Icon } from 'native-base'
import AppLoading from 'expo-app-loading'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  GetStarted,
  Splash,
  Register,
  Login,
  Home,
  Following,
  Profile,
  DetailPage,
  UserPage,
  Hire,
} from '../pages'
import { BottomNavigator } from '../components'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" />,
        }}
      />
      <Tab.Screen
        name="Following"
        component={Following}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="newspaper" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Icon name="person" />,
        }}
      />
    </Tab.Navigator>
  )
}

const Router = () => {
  const [isReady, setIsReady] = useState(false)

  const startUp = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setIsReady(true)
  }

  useEffect(() => {
    startUp()
  }, [])

  if (!isReady) {
    return <AppLoading />
  }
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hire"
        component={Hire}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Router
