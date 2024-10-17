import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  const handleCartToggle = () => {
    if (inCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
    setInCart(!inCart);
  };

  return (
    <View style={styles.card}>
      <Text>{product.name}</Text>
      <Text>{product.color}</Text>
      <Text>{product.price}</Text>
      <Button
        title={inCart ? 'Remove from cart' : 'Add to cart'}
        onPress={handleCartToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2
  }
});

export default ProductCard;
