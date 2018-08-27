import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import Topo from './src/components/Topo';
import Acoes from './src/components/Acoes';
import Palco from './src/components/Palco';

const empate = 'Empate';
const vocePerdeu = 'Você Perdeu';
const voceGanhou = 'Você Ganhou';


export default class app3 extends Component {    
  constructor(props) {
    super(props);

    this.possiveisResultados['pedra-pedra'] = empate;
    this.possiveisResultados['pedra-papel'] = vocePerdeu;
    this.possiveisResultados['pedra-tesoura'] = voceGanhou;
    this.possiveisResultados['papel-papel'] = empate;
    this.possiveisResultados['papel-tesoura'] = vocePerdeu;
    this.possiveisResultados['papel-pedra'] = voceGanhou;  
    this.possiveisResultados['tesoura-tesoura'] = empate;
    this.possiveisResultados['tesoura-pedra'] = vocePerdeu;
    this.possiveisResultados['tesoura-papel'] = voceGanhou;    

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }  

  possiveisResultados = {};

  jokenpo = (escolhaUsuario) => {
    // gera número aleatório (0,1,2)        
    const opcoesComputador = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoesComputador[Math.floor(Math.random() * 3)];    
    const resultado = this.possiveisResultados[`${escolhaUsuario}-${escolhaComputador}`];
    this.setState(() => ({ escolhaUsuario, escolhaComputador, resultado }));
  }

  render() {
    const { escolhaUsuario, escolhaComputador, resultado } = this.state;
    return (
      <View>
        <Topo />
        <Acoes jokenpo={this.jokenpo} />        
        <Palco 
          resultado={resultado} 
          escolhaComputador={escolhaComputador} 
          escolhaUsuario={escolhaUsuario}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => app3);
