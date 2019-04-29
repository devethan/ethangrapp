import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LikeScreen = () => <View style={styles.container}>
  <Ionicons name={"ios-heart"} size={30} color={'red'} />
</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default LikeScreen;
