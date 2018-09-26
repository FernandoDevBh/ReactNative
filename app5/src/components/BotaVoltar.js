import React from 'react';
import {    
    Image,
    TouchableHighlight
} from 'react-native';

const btnVoltar = require('../imgs/btn_voltar.png');

const BotaoVoltar = ({ navigator, backgroundColor }) => (
    <TouchableHighlight 
        onPress={() => navigator.pop()}
        underlayColor={backgroundColor}
        activeOpacity={0.3}>
        <Image source={btnVoltar} />
    </TouchableHighlight>
);

export default BotaoVoltar;
