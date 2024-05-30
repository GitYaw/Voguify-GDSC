import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

const ItemDetailsView = ({ navigation, route }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("T-Shirt Title");
    const [description, setDescription] = useState("T-Shirt Description");

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/black_tshirt.jpeg')}
                style={styles.image}
            />
            {isEditing ? (
                <TextInput
                    style={styles.input}
                    onChangeText={setTitle}
                    value={title}
                />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
            {isEditing ? (
                <TextInput
                    style={styles.input}
                    onChangeText={setDescription}
                    value={description}
                />
            ) : (
                <Text style={styles.description}>{description}</Text>
            )}
            <View style={{ flexDirection: "row", justifyContent: 'space-between' }}> 
            <Button
                title={isEditing ? "Save" : "Edit"}
                onPress={handleEditToggle}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'left',
        padding: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        marginBottom: 40,
        marginTop: -100,
        resizeMode: "contain",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default ItemDetailsView;
