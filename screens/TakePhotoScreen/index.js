import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TakePhotoScreen = () => (
  <View style={styles.container}>
    <Text>TakePhoto~</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default TakePhotoScreen;
