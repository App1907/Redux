import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';

const productList = [
  { id: 1, name: 'Product 1', price: 30 },
  { id: 2, name: 'Product 2', price: 50 },
];

const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ProductListScreen;
