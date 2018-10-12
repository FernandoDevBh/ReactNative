import React from 'react';
import { View, StyleSheet } from 'react-native';
import Numero from './Numero';

export default ({ atualizaValor, num1, num2 }) => (  
    <View style={styles.numeros}>
        <Numero nome='num1' num={num1} atualizaValor={atualizaValor} />
        <Numero nome='num2' num={num2} atualizaValor={atualizaValor} />
    </View>
);

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
