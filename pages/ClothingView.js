import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import blackTshirt from '../assets/black_tshirt.jpeg';
import searchLogo from '../assets/search_logo.jpeg';

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: '$10', image: blackTshirt },
  { id: 2, name: 'Product 2', price: '$20', image: blackTshirt },
  { id: 3, name: 'Product 3', price: '$30', image: blackTshirt },
  { id: 4, name: 'Product 4', price: '$40', image: blackTshirt },
  { id: 5, name: 'Product 5', price: '$50', image: blackTshirt },
  { id: 6, name: 'Product 6', price: '$60', image: blackTshirt },
  { id: 7, name: 'Product 7', price: '$70', image: blackTshirt },
  { id: 8, name: 'Product 8', price: '$80', image: blackTshirt },
];

const ClothingView = () => {
  const navigation = useNavigation();

  const handleProductPress = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const renderProductItem = (product) => (
    <TouchableOpacity key={product.id} onPress={() => handleProductPress(product.id)}>
      <View style={styles.productItem}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    groupedProducts.push(products.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Your Inventory</Text>
      </View>
      <View style={styles.searchBar}>
        <Image source={searchLogo} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#999"
        />
      </View>
      <ScrollView contentContainerStyle={styles.productList}>
        {groupedProducts.map((row, index) => (
          <View key={index} style={styles.productRow}>
            {row.map((product) => renderProductItem(product))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  productList: {
    paddingBottom: 80,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productItem: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default ClothingView;