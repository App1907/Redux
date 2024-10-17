import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ cartCount }: { cartCount: number }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
      <Text style={styles.cartCount}>{cartCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    fontSize: 24,
    color: '#fff'
  },
  cartCount: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Header;
