/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import firebase from 'firebase'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class app8 extends Component {

  constructor(props){
    super(props)
    this.state = { pontuacao: 0 }
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

  salvarDados(){
    //let database = firebase.database();
    //database.ref("pontuacao").set("666") //cria um no no banco e insere o valor 100
    //database.ref("pontuacao").remove() //remove o no

    let funcionarios = firebase.database().ref("funcionarios");

    //funcionarios.child("001").child("nome").set("guabirabaDev")
    //funcionarios.push().child("nome").set("porcoles") //gera um id randomico

    //criar passando objetos
    funcionarios.push().set(
      {
        nome: "Guaracy A Lima",
        altura: "1.90",
        peso: "120KG"
      }
    )

  }

  listarDados(){
    let fb = firebase.database().ref("pontuacao").on('value', (snapshot) => {
      let pontos = snapshot.val()
      this.setState({ pontuacao: pontos})
    }) //on() adiciona um listener (ouvinte)

  }

  //usuarios

  cadastrarUsuario(){
    const usuario = firebase.auth()

    let email = "guaracyaraujolima@gmail.com"
    let senha = "123456"

    usuario.createUserWithEmailAndPassword(
      email, senha
    ).catch(
      (erro) => {
        let erroMessage = ""
        if( erro.code == "auth/weak-password"){
          erroMessage = "A senha deve ter pelomenos 6 caracteres"
        }
        alert( erroMessage )
      }
    )
  }

  verificarUsuarioLogado(){
    const usuario = firebase.auth()
    const usuarioAtual = usuario.currentUser;
    usuario.onAuthStateChanged(
      ( usuarioAtual ) => {
        if(usuarioAtual){
          alert("usuario logado")
        }else{
          alert("nada dento")
        }
      }
    )
    // const usuarioAtual = usuario.currentUser;
    // if(usuarioAtual){
    //   alert(usuarioAtual)
    // }else{
    //   alert("nada dento")
    // }
  }

  deslogarUsuario(){
    const usuario = firebase.auth()
    usuario.signOut()
  }

  logarUsuario(){
    let email = "guaracyaraujolima@gmail.com"
    let senha = "123456"
    const usuario = firebase.auth()
    usuario.signInWithEmailAndPassword(
      email, senha
    )
  }

  render() {
    let { pontuacao } = this.state
    return (


      <View style={styles.container}>

        <Button
                onPress={ () => {
                  this.salvarDados()
                }
              }
                title="Salvar dados"
                color="#841584"
                accessibilityLabel="Salvar dados"/>
        <Button
                onPress={ () => {
                  this.cadastrarUsuario()
                }
              }
                title="+ Usuario"
                color="#841584"
                accessibilityLabel="adiciona um novo Usuario"/>

                <Button
                        onPress={ () => {
                          this.listarDados()
                        }
                      }
                        title="Listar dados"
                        color="#841584"
                        accessibilityLabel="Listar dados"/>

                <Button
                        onPress={ () => {
                          this.verificarUsuarioLogado()
                        }
                      }
                        title="Verificar se esta logado"
                        color="#841584"
                        accessibilityLabel="Verifica se existe um ususario logado"/>
                <Button
                        onPress={ () => {
                          this.deslogarUsuario()
                        }
                      }
                        title="Deslogar usuario"
                        color="#841584"
                        accessibilityLabel="Deslogar usuario"/>
                <Button
                        onPress={ () => {
                          this.logarUsuario()
                        }
                      }
                        title="Login"
                        color="#841584"
                        accessibilityLabel="Login"/>
        <Text style={styles.welcome}>
        pontuacao:
          { pontuacao }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app8', () => app8);
