import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = React.createClass({
  render: function () {
    return (
      <Text style={styles.day}>
        A day of the week
      </Text>
    )
  }
});

var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000FF'
  }
});

module.exports = DayItem;
