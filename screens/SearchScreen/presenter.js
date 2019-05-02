import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchScreen = props => (
  <View style={styles.container}>
    <Text>Search for {props.searchingBy}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SearchScreen;
