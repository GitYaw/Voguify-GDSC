import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, Image, ScrollView } from 'react-native';
import { onValue, push, ref, remove } from 'firebase/database';

import { database } from '../firebase-config';
import blackTshirt from '../assets/black_tshirt.jpeg';

const DataView = ({ navigation, route }) => {
  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(ref(database, '/clothing'), (snapshot) => {
      const data = snapshot.val() || {};
      const clothing = Object.values(data);
      setClothingItems(clothing);
    });

    return () => unsubscribe();
  }, []);

  function addItem() {
    push(ref(database, '/clothing'), {
      name: 'Gray Hoodie',
      price: 25,
      date: new Date(2024, 1, 10).toString(), // Convert date to string
    });
    push(ref(database, '/clothing'), {
      name: 'Black T-Shirt',
      price: 10,
      date: new Date(2024, 4, 28).toString(), // Convert date to string
    });
  }

  function clearInventory() {
	remove(ref(database, '/clothing'));
  }

  return (
    <ScrollView>
      <View>
        {clothingItems.map((clothingItem, index) => (
          <ClothingItem key={index} clothingItem={clothingItem} />
        ))}
      </View>

		<View>
  			<Button title="Add Test Clothes" onPress={addItem} />
		</View>

		<View>
  			<Button title="Clear Test Clothes" onPress={clearInventory} />
		</View>
    </ScrollView>
  );
};

const ClothingItem = ({ clothingItem }) => {
  const { name, price, date } = clothingItem;

  return (
    <View style={styles.item}>
      <Image source={blackTshirt} style={styles.image} />
      <Text>{name}</Text>
      <Text>Price: ${price}</Text>
      <Text>Purchased: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default DataView;
