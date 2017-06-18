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
          <View>
            <View>
              <Text>
                00:00:00
              </Text>
            </View>
            <View>
              {this.startStopButtion()}
              {this.lapButton()}
            </View>
          </View>

          <View>
            <Text>
              I am a list of laps
            </Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
});

AppRegistry.registerComponent('stopwatch', () => stopwatch);
