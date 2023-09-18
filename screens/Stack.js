import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import ReviewDetail from './ReviewDetail';

const StackScreen = createStackNavigator();

const Stack = () => {
    return (
        <StackScreen.Navigator>
            <StackScreen.Screen name="Home" component={Home} />
            <StackScreen.Screen name="About" component={About} />
            <StackScreen.Screen name="Review" component={ReviewDetail} />
        </StackScreen.Navigator>
    )
}

export default Stack