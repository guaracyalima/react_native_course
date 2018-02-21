const React = require('react');
const Text = require('react-native').Text;
var View = require('react-native').View
var Button = require('react-native').Button
const AppRegistry  = require('react-native').AppRegistry ;

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10)
  alert(numeroAleatorio)
}
const App = () => {
  return (
    <View>
    <Text>Meu primeiro app with reactu nativu</Text>
    <Text>Meu primeiro app with reactu nativu</Text>
    <Text>Meu primeiro app with reactu nativu</Text>
    <Text>Meu primeiro app with reactu nativu</Text>
    <Text>Meu primeiro app with reactu nativu</Text>
    <Text>Meu primeiro app with reactu nativu</Text>

      <Button
              title="Gerar numero randomico"
              onPress={ geraNumeroAleatorio }/>
    </View>
  )
}
AppRegistry.registerComponent('app1', () => App)
