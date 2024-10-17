import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
    <View style={styles.header}>
      <Text style={styles.title}>Shopping Cart</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartButton}>Go to Cart</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Header;
