import React, { Component } from 'react'
import { StyleSheet,Text, View, Image } from 'react-native';
import LoginForm from './LoginForm'

export default class Login extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../../images/Octocat.png')}/>
            <Text style={styles.title}>Voice</Text>
          </View>
          <View style={styles.formContainer}>
            <LoginForm/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    width: 140,
    opacity: 0.9
  }
});
