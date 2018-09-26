import React from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    Image    
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import detalheEmpresa from '../imgs/detalhe_empresa.png';

const CenaEmpresa = ({ navigator }) => (
    <View style={{
        flex: 1,
        backgroundColor: '#FFF'
    }}>
        <StatusBar backgroundColor='#EC7148' />
        <BarraNavegacao voltar navigator={navigator} corDeFundo='#EC7148'/>
        <View style={styles.cabecalho}>
            <Image source={detalheEmpresa} />
            <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>
        <View style={styles.detalheEmpresa}>
            <Text style={styles.txtEmpresa}>Lorem ipsum dolorem sit amet, dolorem</Text>
            <Text style={styles.txtEmpresa}>sit amet ipsum dolorem sit</Text>            
        </View>
    </View>
);

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 30
    },
    txtTitulo: {
        fontSize: 30,
        color: '#EC7148',
        marginLeft: 10,
        marginTop: 25
    },
    detalheEmpresa: {
        marginTop: 20,
        padding: 20
    },
    txtEmpresa: {
        fontSize: 18
    }
});

export default CenaEmpresa;
