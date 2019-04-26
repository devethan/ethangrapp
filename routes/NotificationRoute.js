import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NotificationScreen from "../screens/NotificationScreen";
import sharedRoutes, { sharedOptions } from "./shareRoutes";

const NotificationRoute = createStackNavigator(
  {
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
          headerTitle: 'NOTIFICATION'
      }
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(NotificationRoute);
