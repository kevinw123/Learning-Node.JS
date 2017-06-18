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
  View
} from 'react-native';

export default class stopwatch extends Component {
  startStopButtion() {
    return (
      <View>
        <Text>
            Start
        </Text>
      </View>
    );
  }

  lapButton(){
    return (
      <View>
        <Text>
            Lap
        </Text>
      </View>
    );
  }

  render() {
    return (
        <View>
          <Text>
            00:00:00
          </Text>
          {this.startStopButtion()}
          {this.lapButton()}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('stopwatch', () => stopwatch);
