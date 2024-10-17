// screens/HomeScreen.tsx
import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const products = [
  { id: 1, name: 'Samsung Mobile', color: 'white', price: 30000 },
  { id: 2, name: 'Nokia Mobile', color: 'black', price: 30000 },
  { id: 3, name: 'Apple iPhone', color: 'green', price: 130000 }
];

const HomeScreen = () => {
  const cartCount = useSelector((state: any) => state.cart.count);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <Header cartCount={cartCount} />
      <ScrollView>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
