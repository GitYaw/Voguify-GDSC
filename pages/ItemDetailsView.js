import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, ImageBackground} from 'react-native';
import backgroundImage from '../assets/primary_background.png';
const ItemDetailsView = ({ navigation, route }) => {
    const { item } = route.params;
    const { name } = item;
    const { price } = item;
    const { image } = item;
    const { date } = item;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("T-Shirt Title");
    const [description, setDescription] = useState("T-Shirt Description");

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Image
                    source={{uri: image}}
                    style={styles.image}
                />
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        onChangeText={setTitle}
                        value={item}
                    />
                ) : (
                    <Text style={styles.title}>{name}</Text>
                )}
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        onChangeText={setDescription}
                        value={price}
                    />
                ) : (
                    <Text style={styles.description}> ${price}</Text>
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
        </ImageBackground>
      
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
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
});

export default ItemDetailsView;
