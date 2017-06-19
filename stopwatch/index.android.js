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

export default class stopwatch extends Component {
  getInitialState(){
      return {
        timeElapsed: null
      }
  }

  startStopButtion() {
    return (
      <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress}>
        <Text>
            Start
        </Text>
      </TouchableHighlight>
    );
  }

  handleStartPress(){
    var startTime = new Date();

    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  }

  lapButton(){
    return (
      <TouchableHighlight>
        <Text>
            Lap
        </Text>
      </TouchableHighlight>
    );
  }

  border(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={[styles.header, this.border('yellow')]}>
            <View style={[styles.timeWrapper, this.border('red')]}>
              <Text>
                {this.state.timeElapsed}
              </Text>
            </View>
            <View style={[styles.buttonWrapper, this.border('green')]}>
              {this.startStopButtion()}
              {this.lapButton()}
            </View>
          </View>

          <View style={[styles.footer, this.border('blue')]}>
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
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
});

AppRegistry.registerComponent('stopwatch', () => stopwatch);
