import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Image2, Image3, Image4, Photo1 } from '../../assets'
import { Button, Header } from '../../components'
import ThumbnailCover from '../../components/molecules/ThumbnailCover'

const UserPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header label="Detail User" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.images}>
          <Image style={styles.cover} source={Image4} />
          <Image style={styles.userPhoto} source={Photo1} />
        </View>
        <View style={styles.tagline}>
          <Text style={styles.username}>Korea Reomit</Text>
          <Text style={styles.usertagline}>
            Bersama orang Korea yang medhok!
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Follow" type="secondary" />
          <View style={{ width: 10 }} />
          <Button title="Hire" onPress={() => navigation.navigate('Hire')} />
        </View>
        <View>
          <Text style={styles.arttext}>Korea Reomit's Arts</Text>
          <ThumbnailCover style={styles.img} img={Image3} />
          <ThumbnailCover style={styles.img} img={Image2} />
        </View>
      </View>
    </ScrollView>
  )
}

export default UserPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  images: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cover: {
    width: 450,
    height: 260,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    top: -60,
    borderColor: '#e5e5e5',
    borderWidth: 4,
  },
  tagline: {
    top: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  usertagline: {
    marginTop: 10,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  buttons: {
    top: -40,
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  arttext: {
    top: -20,
    fontSize: 16,
    fontWeight: '700',
  },
  img: {
    top: -20,
    width: 300,
    height: 200,
    marginTop: 10,
  },
})
