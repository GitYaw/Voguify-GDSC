import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileView from './pages/ProfileView';
import ClothingView from './pages/ClothingView';
import OutfitsView from './pages/OutfitsView';
import ExpensesView from './pages/ExpensesView';
import LoginView from './pages/LoginView'
import RegisterView from './pages/RegisterView'
import LandingView from './pages/LandingView'
import NewItemView from './pages/NewItemView'
import ItemDetailsView from './pages/ItemDetailsView'
import DataView from './pages/DataView'
import Footer from './Footer'; // Import the Footer component
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth, onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth } from './firebase-config';


import primaryBackground from './assets/primary_background.png';

const Stack = createNativeStackNavigator();

const App = () => {

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await AsyncStorage.setItem('current_user', '');
      console.log('User signed out!');
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen name="Home" options={{ title: 'Welcome!' }}>
              {props => <HomeScreen {...props} handleSignOut={handleSignOut} />}  
          </Stack.Screen>
          <Stack.Screen name="Landing" component={LandingView} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="CreateAccount" component={RegisterView} />
          <Stack.Screen name="Data" component={DataView} />
          <Stack.Screen name="Clothing" component={ClothingView} />
          <Stack.Screen name="NewItem" component={NewItemView} />
          <Stack.Screen name="ItemDetails" component={ItemDetailsView} />
          <Stack.Screen name="Outfits" component={OutfitsView} />
          <Stack.Screen name="Expenses" component={ExpensesView} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation, handleSignOut}) => {


  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const user = await AsyncStorage.getItem('current_user');
        if (user) {
          setCurrentUser(user);
        }
      } catch (e) {
        console.error("Failed to fetch current_user from AsyncStorage");
      }
    };
    getCurrentUser();
  }, []);



  return (
    <ImageBackground source={primaryBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
      {currentUser === '' | !currentUser ? (
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      ) : (
        <>
        <View style={styles.buttonContainer}>
          <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={() => navigation.navigate('CreateAccount')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Landing" onPress={() => navigation.navigate('Landing')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Data" onPress={() => navigation.navigate('Data')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Inventory" onPress={() => navigation.navigate('Clothing')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="New Item" onPress={() => navigation.navigate('NewItem')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Item Details" onPress={() => navigation.navigate('ItemDetails')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Outfits" onPress={() => navigation.navigate('Outfits')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Expenses" onPress={() => navigation.navigate('Expenses')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
        </>
      )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: 12
  },
});

export default App;
