//modules
import React, { Component } from 'react'
import { View, Text, TextInput, Button, Alert } from 'react-native'
import firebase from 'firebase'

//styles
import  css  from '../../css/Auth-style'

export default class FormLogin extends Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyDI8ROzBz9ebNmBXkeCNuqZgRGaCcngGs4",
      authDomain: "projeto-teste-4ed06.firebaseapp.com",
      databaseURL: "https://projeto-teste-4ed06.firebaseio.com",
      projectId: "projeto-teste-4ed06",
      storageBucket: "projeto-teste-4ed06.appspot.com",
      messagingSenderId: "869549393928"
    };
    firebase.initializeApp(config);
  }
  newUser(){
    const user = firebase.auth()
    let mail = "user@user.com"
    let password = "123456"

    user.createUserWithEmailAndPassword( mail, password )
        .catch( ( err ) => {
          let errorMessage = ""
          let errorCode = ""

          if( err.code == "auth/weak-password" ){
            errorMessage  = "A Senha deve ter pelomenos 6 caracteres"
          }

          Alert.alert( errorCode , "<br>", errorMessage)

        })
        console.log('new user is works')
  }

  render(){
    return(
        <View style={ css.main }>

          <View style={ css.viewTitle }>
            <Text style={ css.title }>Chat App</Text>
          </View>

          <View style={ css.viewLogin }>
            <TextInput placeholder='E-mail' style={ css.inputLogin }/>
            <TextInput placeholder='Senha' style={ css.inputLogin }/>
          </View>

          <View style={ css.viewButtonsMain }>
            <View>
              <Button
                      style={ css.buttonView }
                      title='Entrar'
                      style={ css.buttonAccess }
                      onPress={ () => this.newUser() }/>
            </View>
          </View>

        </View>
    )
  }
}

// export default props => (
//   <View style={ css.main }>
//
//     <View style={ css.viewTitle }>
//       <Text style={ css.title }>Chat App</Text>
//     </View>
//
//     <View style={ css.viewLogin }>
//       <TextInput placeholder='E-mail' style={ css.inputLogin }/>
//       <TextInput placeholder='Senha' style={ css.inputLogin }/>
//     </View>
//
//     <View style={ css.viewButtonsMain }>
//       <View>
//         <Button style={ css.buttonView } title='Entrar' style={ css.buttonAccess } onPress={ () => false }/>
//       </View>
//     </View>
//
//   </View>
// )
