import { createStackNavigator, createAppContainer } from "react-navigation";
import TabsNavigation from "./TabsNavigation";
import TakePhotoScreen from "../screens/TakePhotoScreen";

const RootNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigation,
      navigationOptions: {
        header: null
      }
    },
    TakePhoto: {
      screen: TakePhotoScreen,
      navigationOptions: {
        // header: null
        title: 'Photo',
        headerBackTitle: null
      }
    }
  },
  {
    mode: 'modal'
  }
);

export default createAppContainer(RootNavigator);
