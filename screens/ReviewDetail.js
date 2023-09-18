import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { globalStyles, images } from '../style/Global'
import { useRoute } from '@react-navigation/native';
import Card from './Card';

export default function ReviewDetail({ navigation }) {

  const route = useRoute(); // Use the useRoute hook to access the route object

  // Access parameters from the route.params object
  const title = route.params.title;
  const body = route.params.body;
  const rating = route.params.rating;

  return (
    <View style={globalStyles.container}>
      <Text>Reviews</Text>
      <Card>
        <Text><Text style={globalStyles.textbold}>Title: </Text> {title}</Text>
        <Text><Text style={globalStyles.textbold}>Body: </Text>{body}</Text>
        <View style={globalStyles.rating}>
          <Text style={globalStyles.textbold}>GameZone rating: </Text>
          <Image source={(images.ratings[rating])} />
        </View>
      </Card>
    </View>
  )
}
