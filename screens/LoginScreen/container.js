import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import LoginScreen from "./presenter";

class Container extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Log In"
  });
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };
  render() {
    const { username, password } = this.state;
    return (
      <LoginScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        fbLogin={this._fbLogin}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };
  _changePassword = text => {
    this.setState({ password: text });
  };
  _submit = async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;
    if(!isSubmitting){
      this.setState({
        isSubmitting: true
      });
      const loginResult = await login(username, password);
      console.log(loginResult)
      if(!loginResult) {
        Alert.alert('Something went wrong, try again.');
        this.setState({
          isSubmitting: false
        })
      } else {
        Alert.alert('All fields are required.')
      }
    }
  };
  _fbLogin = async () => {
    const { fbLogin } = this.props;
    this.setState({isSubmitting: true})
    const fbLoginResult = await fbLogin();
    if( !fbLoginResult ) {
      Alert.alert('Something went wrong, try again.');
      this.setState({ isSubmitting: false })
    } else {
      Alert.alert('facebook login success');
    } 
  }
}

export default Container;
