/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';

export default class GithubApp extends Component {


  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="register" component={Register} hideNavBar={true}/>
          <Scene key="login" component={Login} initial={true} hideNavBar={true}/>
        </Scene>
      </Router>
    )
  }
}


AppRegistry.registerComponent('GithubApp', () => GithubApp);
