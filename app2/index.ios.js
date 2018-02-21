//Impors
import React from 'react'
import { Text, AppRegistry , View, TouchableOpacity, Image } from 'react-native'

//estilos
const Estilos = {
    // estiloTexto: {
    //   fontSize: 30,
    //   backgroundColor: '#08509b',
    //     width: 60,
    //     height: 60
    //   // paddingTop: 15,
    //   // paddingBottom: 3,
    //   // shadowColor: '#000000',
    //   // shadowOffset: {
    //   //   width: 0,
    //   //   height: 2
    //   // },
    //   // shadowOpacity: 0.4,
    //   // shadowRadius: 2
    //   // color: '#fff',
    //   // fontStyle: 'normal',
    //   // fontWeight: '100',
    //   // textAlign: 'center',
    //   // textDecoration: 'line-through'
    // },
    // estiloTexto2: {
    //   fontSize: 30,
    //   backgroundColor: '#2a48fa',
    //     width: 60,
    //     height: 60
    // },
    // estiloView: {
    //   backgroundColor: 'skyblue',
    //   height: 300,
    //   //justifyContent alinha o conteudo
    //   justifyContent: 'space-around',
    //   alignItems: 'center',
    //   flexDirection: 'column'
    // }
    principal: {
      paddingTop: 40
      // flex: 1, //ocupa todo o espaço da tela=> 1:1
      // backgroundColor: 'cornflowerblue'
    },
    // conteudo1: {
    //   flex:2,
    //   backgroundColor: 'brown'
    // },
    // conteudo2: {
    //   flex:8,
    //   backgroundColor: 'yellowgreen'
    // },
    // conteudo3: {
    //   flex:1,
    //   backgroundColor: 'orangered'
    // }

    botao: {
      backgroundColor: '#48bbec',
      padding: 10,
      borderColor: '#1d8eb8',
      borderWidth: 3,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.4
    },
    textoBotao: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    imagem: {
      justifyContent: 'flex-end',
      paddingBottom: 5
    }

}

const botaoPressionado = () => alert('botapPressionado')

//cria Component
const App = () => {
  const { principal, botao, textoBotao, imagem} = Estilos

  return (
    <View style={ principal }>
      <TouchableOpacity style={botao}>
        <Text style={ textoBotao }>Click aqui porra</Text>
      </TouchableOpacity>

      <Image source={ require('./imgs/uvas.png') } style={ imagem }>
        <Text>Legenda da foto</Text>
      </Image>
      <Image source={ { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'} }
      style={{width: 400, height: 400}}/>
    </View>
  );
};

//registra Component
AppRegistry.registerComponent('app2', () => App)
