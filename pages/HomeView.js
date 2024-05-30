import * as React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';

const HomeView = ({ navigation, route }) => {
    const remainingBudget = 500; // Example remaining budget value

    return (
        <ImageBackground source={require('../assets/primary_background.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/vogueify.png')} style={styles.logo} />
                    <Text style={styles.title}>Voguify</Text>
                </View>
                <View style={styles.budgetContainer}>
                    <Text style={styles.budgetText}>Remaining Monthly Budget</Text>
                    <View style={styles.budgetBar}>
                        <View style={[styles.budgetFill, { width: `${remainingBudget / 2000 * 100}%` }]} />
                    </View>
                    <Text style={styles.budgetAmount}>${remainingBudget}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Expenses')}>
                        <Text style={styles.buttonText}></Text>
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background to improve readability
        borderRadius: 20,
        margin: 20,
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
    },
    budgetContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 80,
    },
    budgetText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    budgetBar: {
        width: '90%',
        height: 20,
        backgroundColor: '#ddd',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    budgetFill: {
        height: '100%',
        backgroundColor: '#00aeef',
    },
    budgetAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#00aeef',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeView;







