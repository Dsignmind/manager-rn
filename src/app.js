import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC9J-Pb2MbuNVV-RNibKwz4Gf9pXFXg7hE',
            authDomain: 'manager-eee84.firebaseapp.com',
            databaseURL: 'https://manager-eee84.firebaseio.com',
            projectId: 'manager-eee84',
            storageBucket: 'manager-eee84.appspot.com',
            messagingSenderId: '181679541534'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
