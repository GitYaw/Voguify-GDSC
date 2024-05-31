import * as React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';

const HomeView = ({ navigation, route }) => {
    const remainingBudget = 500; // Example remaining budget value

    return (
        <ImageBackground source={require('../assets/primary_background.png')} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/gdscvoguify.png')} style={styles.topLeftLogo} />
                    <Image source={require('../assets/VoguifyLogo.png')} style={styles.logo} />
                </View>
                <View style={styles.budgetBox}>
                    <Text style={styles.welcomeText}>Welcome Back, Person!</Text>
                    <Text style={styles.budgetLabel}>Your remaining monthly budget is:</Text>
                    <Text style={styles.budgetAmount}>${remainingBudget}</Text>
                    <TouchableOpacity style={styles.budgetButton} onPress={() => navigation.navigate('Expenses')}>
                        <Text style={styles.buttonText}>View Transactions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.chartContainer}>
                    <Text style={styles.chartText}>You’re on pace to spend $XX.XX than last month:</Text>
                    {/* Here you can add your chart component */}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Sign Out</Text>
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
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    topLeftLogo: {
        width: 47, // Adjust the size as needed
        height: 47, // Adjust the size as needed
        flexDirection: 'row',
        alignItems: 'center',
        left: 140,
    },
    logo: {
        width: 140, // Adjust the size
        height: 75, // Adjust the size
        elevation: 10,
        shadowColor: '#000', // Adding shadow for a 3D effect
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
    },
    budgetBox: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginVertical: 20,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    budgetLabel: {
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
    },
    budgetAmount: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    budgetButton: {
        backgroundColor: '#D295CC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    chartContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    chartText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#D295CC',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 10,
    },
});

export default HomeView;




