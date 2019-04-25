import React, { Component } from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import LoggedOutNavigation from "../../navigation/LoggedOutNavigation";

class AppContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          <Text>You are Logged In</Text>
        ) : (
          <LoggedOutNavigation/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});

export default AppContainer;
