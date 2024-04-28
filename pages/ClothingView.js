import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, TextInput, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ClothingView = ({ navigation }) => {
    // Dummy data for clothing items
    const clothingData = [
        { id: '1', name: 'Shirt', icon: 'tshirt-crew' },
        { id: '4', name: 'Hat', icon: 'redhat' },
        { id: '3', name: 'Shoes', icon: 'shoe-sneaker' },
        { id: '2', name: 'Watch', icon: 'watch' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.item, { width: Dimensions.get('window').width / 3 - 16 }]} // Adjust width to account for padding
            // onPress={() => navigation.navigate('ClothingDetails', { itemId: item.id, itemName: item.name })}
        >
            {item.icon && <MaterialCommunityIcons name={item.icon} size={32} color="black" />}
            <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
    );    

    return (
        <View style={styles.container}>
            {/* Updated header title */}
            <Text style={styles.headerTitle}>My Inventory</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    onChangeText={(text) => console.log(text)}
                />
                {/* Add filter components here */}
            </View>
            <FlatList
                data={clothingData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3} // Display items in 3 columns
                contentContainerStyle={styles.grid}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: "center",
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
    },
    grid: {
        justifyContent: 'space-between',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
        justifyContent: 'space-around',
    },
    itemName: {
        marginLeft: 8,
    },
});

export default ClothingView;