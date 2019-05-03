import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FadeIn from "react-native-fade-in-image";

const LikeScreen = props => {
  return (
    <View style={styles.container}>
      {props.userList && props.userList.map(user => (
        <View style={styles.metaBox} key={user.id}>
          <FadeIn>
            <Image
              source={
                user.profile_image
                  ? {
                      uri: user.profile_image
                    }
                  : require("../../assets/images/noPhoto.jpg")
              }
              style={styles.avatar}
            />
          </FadeIn>
          <View style={styles.bbb}>
            <Text>{user.username}</Text>
            <TouchableOpacity>
              {user.following ? (
                <View style={styles.followingBtn}>
                  <Text style={[styles.textBtn, styles.fff]}>Following</Text>
                </View>
              ) : (
                <View style={styles.followBtn}>
                  <Text style={styles.textBtn}>Follow</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {!props.userList && <Text>0 likes</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  metaBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 15
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bbb: {
    flex: 1,
    height: 30,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  followBtn: {
    flex: 1,
    width: 75,
    backgroundColor: "#3E99EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  followingBtn: {
    flex: 1,
    width: 75,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    color: "black"
  },
  textBtn: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14
  },
  fff: { color: "black" }
});

export default LikeScreen;
