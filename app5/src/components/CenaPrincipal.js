import React, { Component } from 'react';
import {
    StyleSheet,
    View,    
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';

import BarraNavegacao from './BarraNavegacao';

import logo from '../imgs/logo.png';
import menuCliente from '../imgs/menu_cliente.png';
import menuContato from '../imgs/menu_contato.png';
import menuEmpresa from '../imgs/menu_empresa.png';
import menuServico from '../imgs/menu_servico.png';

export default class CenaPrincipal extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View >
                <StatusBar backgroundColor={'#CCC'} />            
                <BarraNavegacao />
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.menu}>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight 
                            onPress={() => navigator.push({ id: 'cliente' })}
                            underlayColor={'#B9C941'}
                            activeOpacity={0.3}>
                            <Image style={styles.imgMenu} source={menuCliente} />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => navigator.push({ id: 'contato' })}
                            underlayColor={'#61BD8C'}
                            activeOpacity={0.3}>
                            <Image style={styles.imgMenu} source={menuContato} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.menuGrupo}>
                        <TouchableHighlight 
                            onPress={() => navigator.push({ id: 'empresa' })}
                            underlayColor={'#EC7148'}
                            activeOpacity={0.3}>
                            <Image style={styles.imgMenu} source={menuEmpresa} />
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => navigator.push({ id: 'servico' })}
                            underlayColor={'#19D1C8'}
                            activeOpacity={0.3}>
                            <Image style={styles.imgMenu} source={menuServico} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center'
    },
    menuGrupo: {
        flexDirection: 'row',        
    },
    imgMenu: {
        margin: 15
    }
});
