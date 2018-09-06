import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet
 } from 'react-native';
import PropTypes from 'prop-types';

class Item extends Component {
    render() {
        const { foto: uri, titulo, valor, local_anuncio, data_publicacao } = this.props.item;
        return (
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{ height: 100, width: 100 }} source={{ uri }} />
                </View>
                <View style={styles.detalhesItem}>
                    <Text style={styles.txtTitulo}>{titulo}</Text>
                    <Text style={styles.txtValor}>R$ {valor}</Text>
                    <Text style={styles.txtDetalhes}>Local: {local_anuncio}</Text>
                    <Text style={styles.txtDetalhes}>Dt. Publicação: {data_publicacao}</Text>
                </View>
            </View>
        );
    }
}

Item.propTypes = {
    item: PropTypes.shape({
        foto: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        local_anuncio: PropTypes.string.isRequired,
        data_publicacao: PropTypes.string.isRequired
    }).isRequired
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF'0,
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row'
    },
    foto: {
        width: 102,
        height: 102
    },
    detalhesItem: {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtValor: {
        fontSize: 16,
        fontWeight: 'bold'

    },
    txtDetalhes: {
        fontSize: 16
    }
});

export default Item;
