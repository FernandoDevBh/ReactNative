import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Painel, Topo, Resultado } from './components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', operacao: 'soma', resultado: '' };
    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.soma = this.soma.bind(this);
    this.subtracao = this.subtracao.bind(this);
  }

  soma(valor1, valor2) {
    return valor1 + valor2;
  }

  subtracao(valor1, valor2) {
    return valor1 - valor2;
  }

  atualizaValor(prop, valor) {
    const newState = {};
    newState[prop] = valor;
    this.setState(newState);
  }

  calcular() {
    this.setState({
      resultado: this[this.state.operacao](
        parseFloat(this.state.num1),
        parseFloat(this.state.num2)).toString()
    });
  }

  render() {
    const { num1, num2, operacao, resultado } = this.state;
    return (
      <View>
        <Topo />
        <Resultado valor={resultado} />
        <Painel 
          num1={num1}
          num2={num2} 
          operacao={operacao}
          atualizaValor={this.atualizaValor}
          calcular={this.calcular}
        />
      </View>
    );
  }
}

