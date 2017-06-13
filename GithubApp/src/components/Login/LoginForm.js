import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TextInput
            placeholder="Username or Email"
            placeHolderTextColor="rgba(255,255,255,0.7)"
            style={styles.input} />
          <TextInput
            placeholder="Password"
            placeHolderTextColor="rgba(255,255,255,0.7)"
            secureTextEntry
            style={styles.input} />

            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
