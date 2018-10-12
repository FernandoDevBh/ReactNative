import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ nome, num, atualizaValor }) => (
    <TextInput 
        style={styles.numero}
        value={num}
        onChangeText={valor => atualizaValor(nome, valor)}
    />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
});
