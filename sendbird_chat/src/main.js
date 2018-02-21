import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Login from './components/login'
export default class Main extends Component{
  render(){
    return(
      <Login />
    )
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }
})
