import firebase from 'firebase';
import React, { Component } from 'react';
import { 
    View,
    Button
} from 'react-native';

export default class App extends Component {    
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAuU-H_hyXM_6SQa7hUWp3hnIdpy4fUDZM',
            authDomain: 'configuracaofirebasereac-6b9fd.firebaseapp.com',
            databaseURL: 'https://configuracaofirebasereac-6b9fd.firebaseio.com',
            projectId: 'configuracaofirebasereac-6b9fd',
            storageBucket: 'configuracaofirebasereac-6b9fd.appspot.com',
            messagingSenderId: '152627816312'
          };
        firebase.initializeApp(config);
    }    

    cadastrarUsuario() {
        const email = 'fsffernando@hotmail.com';
        const senha = 'fernando123456';
        const usuario = firebase.auth();
        usuario
            .createUserWithEmailAndPassword(email, senha)
            .catch((err) => {
                // erro.code
                // erro.message
                alert(err.message);
            });
    }

    verificarUsuarioLogado() {
        const usuario = firebase.auth();
        usuario.onAuthStateChanged((usuarioAtual) => {
            if (usuarioAtual) {
                alert('Usuário logado');
            } else {
                alert('Usuário não está logado logado');
            }    
        });
        /*const usuarioAtual = usuario.currentUser;
        if (usuarioAtual) {
            alert('Usuário logado');
        } else {
            alert('Usuário não está logado logado');
        }*/        
    }

    deslogarUsuario() {
        const usuario = firebase.auth();
        usuario.signOut();
    }

    logarUsuario() {
        const usuario = firebase.auth();
        const email = 'fsffernando@hotmail.com';
        const senha = 'fernando123456';
        usuario.signInWithEmailAndPassword(email, senha)
            .catch(erro => {
                alert(err.message);
            });
    }

    render() {
        return (
            <View>
                <Button 
                    onPress={() => this.cadastrarUsuario()}
                    title='Cadastrar Usuário'
                    color='#841584'
                    accessibilityLabel='Cadastrar Usuário'
                />
                <Button 
                    onPress={() => this.verificarUsuarioLogado()}
                    title='Verificar Usuário logado'
                    color='#841584'
                    accessibilityLabel='Verificar Usuário logado'
                />                
                <Button 
                    onPress={() => this.deslogarUsuario()}
                    title='Deslogar Usuário'
                    color='#841584'
                    accessibilityLabel='Deslogar Usuário'
                />
                <Button 
                    onPress={() => this.logarUsuario()}
                    title='Logar Usuário'
                    color='#841584'
                    accessibilityLabel='Logar Usuário'
                />
            </View>
        );
    }
}

