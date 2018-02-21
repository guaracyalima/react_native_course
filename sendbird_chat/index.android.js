import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Main from './src/main'
export default class sendbird_chat extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('sendbird_chat', () => sendbird_chat);
