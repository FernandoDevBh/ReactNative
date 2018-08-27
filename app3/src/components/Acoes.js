import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';

const Acoes = (props) => (
    <View style={styles.painelAcoes}>
        <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => props.jokenpo('pedra')} />
        </View>
        
        <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => props.jokenpo('papel')} />
        </View>
        
        <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => props.jokenpo('tesoura')} />
        </View>
    </View>
);

Acoes.propTypes = {
    jokenpo: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90    
      },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
      }
});

export default Acoes;
