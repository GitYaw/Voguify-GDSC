import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileView from './pages/ProfileView';
import ClothingView from './pages/ClothingView';
import OutfitsView from './pages/OutfitsView';
import ExpensesView from './pages/ExpensesView';
import LoginView from './pages/LoginView'
import NewItemView from './pages/NewItemView'
import ItemDetailsView from './pages/ItemDetailsView'
import DataView from './pages/DataView'
import Footer from './Footer'; // Import the Footer component

import primaryBackground from './assets/primary_background.png';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome!' }} />
        <Stack.Screen name="Login" component={LoginView} />
        <Stack.Screen name="Profile" component={ProfileView} />
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

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={primaryBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
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
