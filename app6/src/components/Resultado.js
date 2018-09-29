import React, { Component } from 'react';
import { 
    Image,
    View,
    StyleSheet
} from 'react-native';

import Cara from '../imgs/moeda_cara.png';
import Coroa from '../imgs/moeda_coroa.png';

export default class Resultado extends Component {
    constructor(props) {
        super(props);
        this.state = { resultado: null };
    }

    componentWillMount() {
         if (Math.floor(Math.random() * 2) > 0) {
             this.setState({ resultado: Coroa });
         } else {
             this.setState({ resultado: Cara });
         }
    }

    render() {
        return (
            <View style={styles.resultado}>
                <Image source={this.state.resultado} />                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

