import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Image2, Image3, Image4, Image5, Image6, Photo1 } from '../../assets'
import { Button, Header } from '../../components'
import ThumbnailCover from '../../components/molecules/ThumbnailCover'

const DetailPage = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header label="Details Post" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.user}>
          <TouchableOpacity onPress={() => navigation.navigate('UserPage')}>
            <Image style={styles.image} source={Photo1} />
          </TouchableOpacity>
          <View style={styles.profile}>
            <Text style={styles.title}>Modern Landing Page Design</Text>
            <Text>Korea Reomit</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button title="Follow" type="secondary" />
          <View style={{ width: 10 }} />
          <Button title="Hire" onPress={() => navigation.navigate('Hire')} />
        </View>
        <View style={{ height: 20 }} />
        <View>
          <ThumbnailCover style={styles.img} img={Image2} />
          <ScrollView horizontal style={styles.tileImg}>
            <Image style={styles.imgTile} source={Image3} />
            <Image style={styles.imgTile} source={Image4} />
            <Image style={styles.imgTile} source={Image5} />
          </ScrollView>
        </View>
        <View style={styles.description}>
          <Text style={styles.greet}>Say Hello Korea Reomit</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure nobis
            aperiam voluptates dolore eveniet natus incidunt nulla cupiditate
            delectus illum veniam itaque officia vero repellendus animi, tempore
            reiciendis quae asperiores quisquam dolores. Ea, sequi veniam
            obcaecati, ducimus debitis minus labore repellendus laborum, ad
            maiores repudiandae eum quaerat neque nam dicta unde ratione cum
            tempore animi nobis. Voluptatem quidem, corrupti cum impedit iste
            dolores ut molestias veritatis quae expedita voluptas vitae,
            voluptatum, ullam consectetur laboriosam nostrum dolore praesentium
            harum? Expedita, eligendi. Ipsa obcaecati assumenda ducimus modi
            soluta illum omnis laboriosam labore quas! Itaque maxime rem dolorem
            iusto recusandae quaerat sunt ab.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailPage

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  buttons: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  img: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderRadius: 5,
  },
  tileImg: {
    flexDirection: 'row',
    marginTop: 5,
  },
  imgTile: {
    width: 120,
    height: 90,
    marginRight: 5,
  },
  description: {
    marginTop: 20,
  },
  greet: {
    fontSize: 16,
    fontWeight: '700',
  },
})
