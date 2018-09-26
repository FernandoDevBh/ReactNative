import React from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    Image    
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import detalheContato from '../imgs/detalhe_contato.png';

const CenaContatos = ({ navigator }) => (
    <View style={{
        flex: 1,
        backgroundColor: '#FFF'
    }}>
        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={navigator} corDeFundo='#61BD8C'/>
        <View style={styles.cabecalho}>
            <Image source={detalheContato} />
            <Text style={styles.txtTitulo}>Contatos</Text>
        </View>
        <View style={styles.detalheContatos}>
            <Text style={styles.txtContatos}>TEL.: (11) 1234-5678</Text>
            <Text style={styles.txtContatos}>CEL.: (11) 91232-4455</Text>
            <Text style={styles.txtContatos}>E-MAIL: contato@atmconsultoria.com</Text>
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
        color: '#61BD8C',
        marginLeft: 10,
        marginTop: 25
    },
    detalheContatos: {
        marginTop: 20,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
});

export default CenaContatos;
