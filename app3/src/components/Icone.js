import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Tesoura from '../../img/tesoura.png';
import Papel from '../../img/papel.png';
import Pedra from '../../img/pedra.png';

const images = {
    tesoura: Tesoura,
    papel: Papel,
    pedra: Pedra    
};

const Icone = ({ escolha, jogador }) => {
    const image = images[escolha];
    const { icone, txtJogador } = styles;

    return image ? (
    <View style={icone}>
        <Text style={txtJogador}>{jogador}</Text>
        <Image source={image} />
    </View>
    ) : null;
};

Icone.propTypes = {
    escolha: PropTypes.string.isRequired,
    jogador: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    icone: {
        alignItems: 'center',
        marginBottom: 20
    },
    txtJogador: {
        fontSize: 18
    }
});

export default Icone;
