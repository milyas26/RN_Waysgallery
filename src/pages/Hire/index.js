import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Header, Input } from '../../components'

const Hire = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header label="Hire" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View>
          <View style={{ height: 10 }} />
          <Input label="Title" />
          <View style={{ height: 10 }} />
          <Input label="Description" type="textarea" />
          <View style={{ height: 10 }} />
          <Input label="Start Date" />
          <View style={{ height: 10 }} />
          <Input label="End Date" />
          <View style={{ height: 10 }} />
          <Input label="Price" />
        </View>
        <View style={{ height: 30 }} />
        <View style={styles.buttons}>
          <Button
            title="Cancel"
            type="secondary"
            onPress={() => navigation.goBack()}
          />
          <View style={{ height: 10 }} />
          <Button title="Bidding" />
        </View>
      </View>
    </ScrollView>
  )
}

export default Hire

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 0,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
  },

  buttons: {
    height: 100,
  },
})
