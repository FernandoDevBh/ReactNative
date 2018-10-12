import React from 'react';
import { View } from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = ({ num1, num2, operacao, atualizaValor, calcular }) => (
                <View>
                    <Entrada atualizaValor={atualizaValor} num1={num1} num2={num2} />
                    <Operacao operacao={operacao} atualizaValor={atualizaValor} />
                    <Comando acao={calcular} />
                </View>
            );

export { Painel };

