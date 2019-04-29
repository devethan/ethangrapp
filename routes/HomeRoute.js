import React from "react";
import { Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./shareRoutes";
import NavButton from '../components/NavButton'

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: (
            <Image
                source={require('../assets/images/logo-nomad.png')}
                style={{height: 35}}
                resizeMode={'contain'}
            />
        ),
        headerLeft: (
            <NavButton
                iconName={'ios-camera'}
                onPress={() => navigation.navigate('TakePhoto')}
            />
        )
      }),
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(HomeRoute);
