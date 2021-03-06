import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "../screens/SearchScreen";
import sharedRoutes, { sharedOptions } from "./shareRoutes";

const SearchRoute = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default createAppContainer(SearchRoute);
