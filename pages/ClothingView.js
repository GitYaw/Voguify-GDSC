import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { useNavigation } from '@react-navigation/native';
import { database } from '../firebase-config';
import { onValue, ref } from 'firebase/database';

import blackTshirt from '../assets/black_tshirt.jpeg';
import searchLogo from '../assets/search_logo.jpeg';
import primaryBackground from '../assets/primary_background.png';

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
    const [clothingItems, setClothingItems] = useState([]);
    const [userClothingItems, setUserClothingItems] = useState([]);


    // getting the current user
    const [currentUser, setCurrentUser] = useState('');
    useEffect(() => {
        const getCurrentUser = async () => {
        try {
            const user = await AsyncStorage.getItem('current_user');
            if (user) {
                setCurrentUser(user);
                console.log("current user set in items view page")
            }
        } catch (e) {
            console.error("Failed to fetc from AsyncStorage");
        }
        };
        getCurrentUser();
    }, []);

    useEffect(() => {
        if (!currentUser) {
            return;
        }

        const unsubscribe = onValue(ref(database, '/clothing'), (snapshot) => {
            const data = snapshot.val() || {};
            const clothing = Object.values(data);
            setClothingItems(clothing);
            const filteredClothing = clothing.filter(clothing => clothing.user === currentUser);
            setUserClothingItems(filteredClothing);
        });

        return () => unsubscribe();
    }, [currentUser]);

    const renderProductItem = (clothingItem) => (
        <TouchableOpacity key={clothingItem.id}>
            {/* onPress={() => handleProductPress(clothingItem.id)} */}
            <View style={styles.productItem}>
                <Image source={blackTshirt} style={styles.productImage} />
                <Text style={styles.productName}>{clothingItem.name}</Text>
                <Text style={styles.productPrice}>${clothingItem.price}</Text>
            </View>
        </TouchableOpacity>
    );

    // const handleProductPress = (productId) => {
    //     navigation.navigate('ProductDetail', { productId });
    // };

    

    const groupedClothingItems = [];
    for (let i = 0; i < userClothingItems.length; i += 2) {
        groupedClothingItems.push(userClothingItems.slice(i, i + 2));
    }

    return (
        <ImageBackground source={primaryBackground} style={styles.backgroundImage}>
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
                    {groupedClothingItems.map((row, index) => (
                        <View key={index} style={styles.productRow}>
                            {row.map((clothingItem) => renderProductItem(clothingItem))}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
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
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    productItemContainer: {
        width: '48%',
        marginBottom: 10,
    },
    productItem: {
        alignItems: 'center',
    },
    productImage: {
        width: '100%',
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
