import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            //<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            //becomes above and below...
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
