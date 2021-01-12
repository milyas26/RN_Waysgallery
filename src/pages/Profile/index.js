import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Image1, Image6, Image7, Photo2 } from '../../assets'
import { Button } from '../../components'
import ThumbnailArt from '../../components/molecules/ThumbnailCover'

const UserPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.images}>
          <Image style={styles.cover} source={Image7} />
          <Image style={styles.userPhoto} source={Photo2} />
        </View>
        <View style={styles.tagline}>
          <Text style={styles.username}>Raditya Dika</Text>
          <Text style={styles.usertagline}>
            Penulis tampan yang bisa design.
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button title="Edit Profile" type="secondary" />
        </View>
        <View>
          <Text style={styles.arttext}>My Arts</Text>
          <ThumbnailArt style={styles.img} img={Image6} />
          <ThumbnailArt style={styles.img} img={Image1} />
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
    height: 240,
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
