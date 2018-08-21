// importações
import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  const numeroAleatorio = Math.floor(Math.random() * 5);
  const frases = [
    'Sou feliz por ser como eu sou, por ter o que tenho, mas amanhã quero ser ainda mais para isso luto diariamente.',
    'Nada melhor para a alma que treinar a gratidão e diariamente agradecer pelas benções que receber.',
    'Amar a vida é amar seus amigos, pois sem eles nada mais faz sentido no seu dia a dia.',
    'Nem toda mudança importante acontece de repente e faz barulho, algumas são silenciosas e vão se fazendo no dia a dia.',
    'Viver não e fácil, mas com coragem para suportar os desafios do dia a dia tudo se torna mais simples.'
  ];

  const fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};

// Criar componente
const App = () => {
  const { principal, botao, textoBotao } = Estilos;
  return (
    <View style={principal}>
      <Image source={require('./images/logo.png')} />
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={botao}>
        <Text style={textoBotao}>Nova frase</Text>
      </TouchableOpacity>
    </View>
    );
};

export default App;


// Renderizar para dispositivo
AppRegistry.registerComponent('app2', () => App);
