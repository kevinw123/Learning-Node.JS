import React, { Component } from 'react';
import { View, Text,TouchableHighlight, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Splash extends Component {
  render(){
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Welcome Friend </Text>
        <TouchableHighlight onPress={Actions.register} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.login} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 180
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 15
  }
});
