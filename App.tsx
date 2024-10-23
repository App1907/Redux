/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */




import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
      <CartScreen />
    </Provider>
  );
};

export default App;
