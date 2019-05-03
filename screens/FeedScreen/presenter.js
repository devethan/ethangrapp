import React from "react";
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";
import Photo from '../../components/Photo';
// import { Ionicons } from "@expo/vector-icons";

const FeedScreen = props => (
  <ScrollView
    refreshControl={
      <RefreshControl 
        refreshing={props.isFetching}
        onRefresh={props.refresh}
        tintColor={'black'}
      />
    }
  >
    <View>
      {props.feed && props.feed.map(photo => <Photo {...photo} key={photo.id} />)}
    </View>
  </ScrollView>
);



export default FeedScreen;
