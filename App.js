import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetail from './screens/ReviewDetail';
import { globalStyles } from './style/Global';
import { Dimensions, Image, ImageBackground, StatusBar, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/NunitoSans_7pt-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/NunitoSans_7pt-Bold.ttf')
})

export default function App() {

  const [fontLoad, setFontLoad] = useState(false)

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoad(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="gray" />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} options={{
          headerTitle: () => (
            <ImageBackground source={require('./assets/game_bg.png')} style={{
              width: Dimensions.get('window').height,
              width: Dimensions.get('window').width
            }}>
              <View style={globalStyles.viewTitle}>
                <Image source={require('./assets/heart_logo.png')} style={globalStyles.image} />
                <Text style={globalStyles.headerTitle}>GameZone</Text>
              </View>
            </ImageBackground>
          ),
        }}
        />
        <Drawer.Screen name="About" component={About} options={{
          headerTitle: 'About GameZone',
          headerStyle: globalStyles.headerStyle,
          headerTitleStyle: globalStyles.headerTitle,
        }}
        />
        <Drawer.Screen name="Review" component={ReviewDetail} options={({ navigation }) => ({
          headerTitle: 'Review Screen',
          headerStyle: globalStyles.headerStyle,
          headerTitleStyle: globalStyles.headerTitle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        })} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
