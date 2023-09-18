import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../style/Global'
import Card from '../screens/Card'
import { AntDesign } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) { // navigation is a automatic prop from the navigation package

  const [moodalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { title: "Zelda, Breath of Fresh Air", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Gotta catch them all", rating: 2, body: "lorem ipsum", key: "2" },
    { title: "No so 'Final' fantasy", rating: 3, body: "lorem ipsum", key: "3" },
    { title: "Gotta see all of them", rating: 4, body: "lorem ipsum", key: "4" },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prevReviews) => {
      return [review, ...prevReviews]
    });
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>

      <Modal visible={moodalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.modalView}>
            <AntDesign name="close" size={24} style={{
              ...globalStyles.modelToggle,
              ...globalStyles.modalClose
            }}
              onPress={() => setModalOpen(false)} />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <AntDesign name="plus" size={24}
        style={globalStyles.modelToggle}
        onPress={() => setModalOpen(true)} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}



// ***** How to navigate ***** //

  // const pressHandler = () => {
  //   navigation.navigate('ReviewDetail') // call the name of the component you gave in your route class
  //   // navigation.push("ReviewDetail") other way to navigating
  // }
