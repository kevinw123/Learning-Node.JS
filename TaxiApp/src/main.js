import React from 'react';
import {View, Text} from 'react-native';

export default class Root extends React.Component {
  renderApp() {
    const initialState = window.__INITIAL_STATE__;
    const store= createStore(initialState);

    return (

    );
  }

  render() {
    return this.renderApp();
  }
}
