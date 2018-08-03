import React, { Component } from 'react';
import { 
  AppRegistry,
  Text,
  View,
  Button } from 'react-native';

export default class App extends Component {

  geraNumeroAleatorio = () => {
    let numeroRandomico = Math.random() * 10;
    numeroRandomico = Math.floor(numeroRandomico);
    alert(numeroRandomico);
  }

  render() {
    return (      
      <View>
        <Text>Gerador de números Randômicos</Text>
        <Button 
          title='Gerar um número randômico'
          onPress={this.geraNumeroAleatorio}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app1', () => App);
