import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import BotaVoltar from './BotaVoltar';

export default class BarraNavegacao extends Component {    
    render() {
        const { barraTitulo, titulo } = styles;
        const { corDeFundo: backgroundColor, voltar } = this.props;
        const style = [barraTitulo];
        if (voltar) {
            style.push({ backgroundColor })
        }
        return (
            <View style={style}>
                { voltar ? <BotaVoltar navigator={this.props.navigator} backgroundColor={backgroundColor} /> : null }
                <Text style={titulo}>ATM Consultoria</Text>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60,
        flexDirection: 'row'
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
});
