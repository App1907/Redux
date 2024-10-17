import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => dispatch(addToCart(product))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductItem;
