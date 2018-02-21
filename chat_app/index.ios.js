import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App'
export default class chat_app extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('chat_app', () => chat_app);
