import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const PhotoAction = props => {
  // console.log(props)
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        {/* likeAction, CommentAction */}
        <TouchableOpacity
          // like/unlike action
          onPressOut={props.handlePress}
        >
          <View style={styles.action}>
            <Ionicons
              name={props.isLiked ? "md-heart" : "md-heart-empty"}
              size={30}
              color={props.isLiked ? "#eb4b59" : "black"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPressOut={() => props.navigation.navigate("Comments")}
        >
          <View style={styles.action}>
            <Ionicons name={"md-cloud-outline"} size={30} color={"black"} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPressOut={() => {
          const photoId = props.photoId;
          props.navigation.navigate("Likes", { photoId });
        }}
      >
        {/* Count of likes */}
        <View>
          <Text style={styles.likes}>
            {props.likeCount} {props.likeCount === 1 ? "like" : "likes"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15
  },
  actions: {
    flexDirection: "row"
  },
  action: {
    marginRight: 10
  },
  likes: {
    fontWeight: "600",
    fontSize: 14
  }
});

export default withNavigation(PhotoAction);
