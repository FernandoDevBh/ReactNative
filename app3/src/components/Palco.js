import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icone from './Icone';

const Palco = ({ resultado, escolhaComputador, escolhaUsuario }) => (
    <View style={styles.palco}>        
        <Text style={styles.txtResultado}>{resultado}</Text>                
        <Icone escolha={escolhaComputador} jogador='Computador' />
        <Icone escolha={escolhaUsuario} jogador='Você' />
    </View>
);

Palco.propTypes = {
    resultado: PropTypes.string.isRequired,
    escolhaComputador: PropTypes.string.isRequired,
    escolhaUsuario: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    palco: {
        alignItems: 'center',
        marginTop: 10
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
      }
});

export default Palco;
