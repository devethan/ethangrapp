import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import LikeScreen from "./presenter";

class container extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userList: props.userList
    //     }
    //     console.log(props)
    // }
    state = {
        userList: this.props.userList
    }
    
    componentDidMount() {
        this.props.fetchUserList()
    }
  render() {
    return <LikeScreen {...this.props}/>;
  }
}

export default container;