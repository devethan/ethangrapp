import React from "react";
import { Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FeedScreen from "../screens/FeedScreen";
import sharedRoutes, { sharedOptions } from "./shareRoutes";

const HomeRoute = createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle:
          // <Image
          //     source={require('../assets/images/logo-white.png')}
          //     style={{
          //         height: 35,
          //     }}
          //     resizeMode={'contain'}
          // />
          "HOME"
      })
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(HomeRoute);
