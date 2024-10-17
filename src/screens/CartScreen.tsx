import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShoppingCart from '../components/ShoppingCart';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ShoppingCart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default CartScreen;
