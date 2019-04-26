import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';
const { store, persistor } = configureStore();
import AppContainer from './components/AppContainer'


class App extends React.Component {
  state = {
    isLoadingComplete: false
  }
  render() {
    // store.dispatch({type:'LOG_OUT'});
    const { isLoadingComplete } = this.state;
    if(!isLoadingComplete) {
      return ( 
        <AppLoading 
            startAsync={this._loadAssetAsync} 
            onError={this._handleLoadingError} 
            onFinish={this._handleFinishLoading}
        />
      )}
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          {/* <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View> */}
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
        require('./assets/splash.png'),
      ]),
      // Font.loadAsync([
      //   ...Ionicons.font,
      //   ...MaterialIcons.font,
      // ])
    ])
  };

  _handleLoadingError = error => {
    console.error(error);
  };

  _handleFinishLoading = async () => {
    this.setState({
      isLoadingComplete: true
    });
  };
}

export default App;
