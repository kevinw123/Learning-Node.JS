import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';

export default class RegisterForm extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="Username or Email"
            placeHolderTextColor="rgb(255,255,255)"
            style={styles.input} />
          <TextInput
            placeholder="Full Name"
            placeHolderTextColor="rgb(255,255,255)"
            style={styles.input} />
          <TextInput
            placeholder="Password"
            placeHolderTextColor="rgb(255,255,255)"
            secureTextEntry
            style={styles.input} />
          <TextInput
            placeholder="Confirm Password"
            placeHolderTextColor="rgb(255,255,255)"
            secureTextEntry
            style={styles.input} />

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 20,
    paddingTop: 200
  },
  input: {
    height: 40,
    backgroundColor: 'rgb(255,255,255)',
    color: '#000',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#2F4F4F',
    fontWeight: '700'
  }
});
