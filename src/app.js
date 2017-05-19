import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <View />
            </Provider>
        );
    }
}

export default App;
