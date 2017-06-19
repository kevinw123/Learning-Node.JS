import React, { Component } from 'react'
import { StyleSheet,Text, View, Image } from 'react-native';
import RegisterForm from './RegisterForm'

export default class Register extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <RegisterForm/>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }
});
