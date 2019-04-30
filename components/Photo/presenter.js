import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import FadeIn from "react-native-fade-in-image";

const { width, height } = Dimensions.get("window");

const Photo = props => {
  const {
    file,
    creator: { username, profile_image },
    location,
    caption,
    comments,
    natural_time
  } = props;
  return (
    <View style={styles.photo}>
      <TouchableOpacity>
        <View style={styles.header}>
          <FadeIn>
            <Image
              source={
                profile_image
                  ? {
                      uri: profile_image
                    }
                  : require("../../assets/images/noPhoto.jpg")
              }
              style={styles.avatar}
            />
          </FadeIn>
          <View>
            <Text style={styles.author}>{username}</Text>
            <Text style={styles.locations}>{location}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <FadeIn>
        <Image
          source={{ uri: file }}
          //   style={{ width, height: props.is_vertical ? 600 : 300 }}
          style={{ width, height: 300 }}
        />
      </FadeIn>
      <View style={styles.photoMeta}>
        <View style={styles.comment}>
            <Text style={styles.commentAuthor}>
                {username}{' '}
                <Text style={styles.message}>{caption}</Text>
            </Text>
        </View>
        {comments.length > 0 && (
            <TouchableOpacity>
            <View style={styles.commentsLink}>
                {comments.length === 1 ? (
                <Text style={styles.linkText}>View 1 comment</Text>
                ) : (
                <Text style={styles.linkText}>View {comments.length} comment</Text>
                )}
            </View>
            </TouchableOpacity>
        )}
        <Text style={styles.dateText}>{natural_time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photo: {
    flex: 1
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  author: {
    fontWeight: "600",
    marginBottom: 3,
    fontSize: 15
  },
  locations: {
    fontSize: 13
  },
  photoMeta: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  comment: {
    marginTop: 5
  },
  commentAuthor: {
    marginRight: 5,
    fontWeight: "600",
    fontSize: 14
  },
  message: {
    fontWeight: "400",
    fontSize: 15
  },
  commentsLink: {
    marginTop: 5
  },
  linkText: {
    fontSize: 15,
    color: "#999"
  },
  dateText: {
    fontSize: 12,
    color: "#999",
    marginTop: 10
  }
});

export default Photo;
