import React from 'react';
import { Picker, StyleSheet } from 'react-native';

export default ({ operacao, atualizaValor }) => (
    <Picker 
        style={styles.operacao} 
        selectedValue={operacao}
        onValueChange={valor => atualizaValor('operacao', valor)}
    >
        <Picker.Item label='Soma' value='soma' />
        <Picker.Item label='Subtração' value='subtracao' />
    </Picker>
);

const styles = StyleSheet.create({
    operacao: {
        marginTop: 15,
        marginBottom: 15
    }
});
