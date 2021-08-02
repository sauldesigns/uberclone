import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <View>
                <Text>Hello</Text>
            </View>
        </Provider>
    );
};

export default App;
