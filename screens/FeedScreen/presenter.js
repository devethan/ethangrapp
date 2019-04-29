import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FeedScreen = props => (
  <View style={styles.container}>
    <Ionicons name={"ios-heart"} size={30} color={'red'} />
    <Text
      style={styles.button}
      onPress={() => {
        props.navigation.navigate("Likes");
      }}
    >
      Feed
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#efefef"
  },
  button: {
    fontSize: 20,
    fontWeight: "600",
    // color: 'white',
    borderColor: "#999"
  }
});

export default FeedScreen;
