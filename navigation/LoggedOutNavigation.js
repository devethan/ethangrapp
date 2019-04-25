import { createStackNavigator, createAppContainer } from "react-navigation";
import LogInScreen from "../screens/LoginScreen";

const AppNavigator = createStackNavigator({
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(AppNavigator);
