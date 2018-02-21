import React, { Component } from 'react'
import { View, Text } from 'react-native'

//components
import FormLogin from './components/auth/FormLogin'

export default class App extends Component {

  render(){
    return(
      <FormLogin />
    )
  }
}
