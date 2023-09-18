import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ReviewDetail from "../screens/ReviewDetail"
import { createAppContainer } from "react-navigation";

const screens = {
    home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            // headerStyle: {
            //     backgroundColor: 'blue'
            // }
        }
    },
    ReviewDetail: {
        screen: ReviewDetail,
        navigationOptions: {
            title: "Review Details",
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "#444",
        headerStyle: {
            backgroundColor: 'lightgray',
            height: 80
        }
    }
});

export default createAppContainer(HomeStack);
// export default HomeStack;