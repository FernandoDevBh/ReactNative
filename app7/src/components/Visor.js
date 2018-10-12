import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default ({ valor }) => (
    <View>
        <TextInput 
            style={styles.visor} 
            placeholder='Resultado' 
            editable={false}
            value={valor}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});
