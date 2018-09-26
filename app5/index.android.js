import React, { Component } from 'react';
import {  
  AppRegistry,  
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServico from './src/components/CenaServico';

export default class app5 extends Component {
  render() {
    return (      
        <Navigator
          initialRoute={{ id: 'principal' }}
          renderScene={(route, navigator) => {
            switch(route.id) {
              case 'servico':
                return (<CenaServico navigator={navigator} />);
              case 'empresa':
                return (<CenaEmpresa navigator={navigator} />);
              case 'contato':
                return (<CenaContatos navigator={navigator} />);
              case 'cliente':
                return (<CenaClientes navigator={navigator} />);                
              default:
                return (<CenaPrincipal navigator={navigator} />);
            }                                                              
          }}
        />      
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);