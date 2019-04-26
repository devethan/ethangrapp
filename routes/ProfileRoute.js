import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./shareRoutes";

const ProfileRoute = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
          headerTitle: 'PROFILE'
      }
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(ProfileRoute);
