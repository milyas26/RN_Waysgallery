import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  ILLogo,
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
} from '../../assets'
import Thumbnail from '../../components/molecules/Thumbnail'

const Home = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ILLogo />
      <Text style={styles.text}>Today's Posts</Text>
      <View>
        <Thumbnail
          avatar={Photo1}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image1}
          onPress={() => navigation.navigate('DetailPage')}
        />
        <Thumbnail
          avatar={Photo2}
          title="Tomyomta Modern Design"
          user="Raditya Dika"
          img={Image2}
        />
        <Thumbnail
          avatar={Photo3}
          title="Minimalis Design Adisad"
          user="Danilla Riyadi"
          img={Image3}
        />
        <Thumbnail
          avatar={Photo4}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image4}
        />
        <Thumbnail
          avatar={Photo5}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image5}
        />
        <Thumbnail
          avatar={Photo1}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image6}
        />
        <Thumbnail
          avatar={Photo1}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image7}
        />
        <Thumbnail
          avatar={Photo1}
          title="Modern Landing Page Design"
          user="Korea Reomit"
          img={Image8}
        />
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
})
