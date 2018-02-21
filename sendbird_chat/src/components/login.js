import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import * as sendbird from 'sendbird';


export default class Login extends Component{

  constructor(props){
    super(props)
      this.state = { username: '', password: ''}
      this.login = this.login.bind(this)
  }

  login(){
    var sb = new sendbird({'appId': '2E3D943A-6B7C-4F43-991C-594E67E58E84'});
    SendBird.init({
      guest_id: this.state.username,
      user_name: this.state.username,
      image_url: "",
      access_token: "",
      successFunc: ( data ) => {
        console.log('sucees')
      },
      errorFunc: ( status, error ) => {
        this.setState({ username: '' })
      }
    })
  }

  render(){
    return(
      <View style={ css.container }>
        <View style={ css.loginContainer }>
          <TextInput
                    style={ css.input }
                    value={ this.state.username }
                    onChangeText={ ( username ) =>  this.setState({ username })}
                    placeholder={ 'Usuario' }
                    maxLength={ 12 }
                    multiline={ false }/>
          <TextInput
                    style={ css.input }
                    value={ this.state.password }
                    onChangeText={ ( password ) =>  this.setState({ password })}
                    placeholder={ 'Senha' }
                    maxLength={ 12 }
                    multiline={ false }/>

          <TouchableHighlight style={ css.button } underlayColor={ '#328fe6' } onPress={ this.login }>
            <Text style={ css.label }>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32c5e6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 8
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328fe6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6'
  },
  label: {
    width: 230,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  }
})
