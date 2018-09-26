import React from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    Image    
} from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import detalheServico from '../imgs/detalhe_servico.png';

const CenaServico = ({ navigator }) => (
    <View style={{
        flex: 1,
        backgroundColor: '#FFF'
    }}>
        <StatusBar backgroundColor='#19D1C8' />
        <BarraNavegacao voltar navigator={navigator} corDeFundo='#19D1C8' />
        <View style={styles.cabecalho}>
            <Image source={detalheServico} />
            <Text style={styles.txtTitulo}>Nossos Serviços</Text>
        </View>
        <View style={styles.detalheServico}>
            <Text style={styles.txtServico}>Consultoria</Text>
            <Text style={styles.txtServico}>Processos</Text>
            <Text style={styles.txtServico}>Acompanhamento de Projetos</Text>
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
        color: '#19D1C8',
        marginLeft: 10,
        marginTop: 25
    },
    detalheServico: {
        marginTop: 20,
        padding: 20
    },
    txtServico: {
        fontSize: 18
    }
});

export default CenaServico;
