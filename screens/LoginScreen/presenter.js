import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const presenter = props => (
  <View style={styles.container}>
    <StatusBar barStyle={"light-content"} />
    <View style={styles.header}>
      <Image
        source={require("../../assets/images/logo-white.png")}
        resizeMode="stretch"
        style={styles.logo}
      />
    </View>
    <View style={styles.content}>
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}

      />
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.button}>
          <Text style={styles.btnText}>Log In</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fbContainer}>
        <View style={styles.fbView}>
          <Ionicons name="logo-facebook" size={22} color="#3E99EE" />
          <Text style={styles.fbText}>Log in with Facebook</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width,
    height: 10,
    marginTop: 50
  },
  logo: {
    width: 180,
    height: 250
  },
  content: {
    flex: 4,
    alignItems: "center",
    marginTop: 10
  },
  fbContainer: {
    marginTop: 50
  },
  fbView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fbText: {
    color: '#3E99EE',
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 14
  },
  textInput: {
    height: 45,
    width: width - 80,
    borderColor: "#bbb",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA"
  },
  touchable: {
    borderRadius: 3,
    backgroundColor: '#3E99EE',
    width: width - 80
  },
  button: {
    paddingHorizontal: 7,
    paddingVertical: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 14
  },
});

export default presenter;
