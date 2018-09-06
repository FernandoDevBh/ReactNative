import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Item from './Item';

const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListaItens extends Component {
    constructor(props) {
        super(props);
        this.state = { listaItens: [] };
    }

    componentWillMount() {
        //requisição http
        axios.get(url)
            .then(res => this.setState({ listaItens: res.data }))
            .catch(() => console.log('Erro ao buscar os dados'));
    }

    render() {        
        return (
            <ScrollView style={{ backgroundColor: '#DDD' }}>
                { this.state.listaItens.map(item => (<Item key={item.titulo} item={item} />)) }
            </ScrollView>
        );
    }
}
