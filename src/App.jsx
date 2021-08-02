import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    <MainNavigation />
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
