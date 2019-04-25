import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class AppContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    console.log(isLoggedIn);
    if (!isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text>I don't know you</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text> AppContainer </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppContainer;
