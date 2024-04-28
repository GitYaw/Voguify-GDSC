import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonContainer: {
    marginBottom: 12
  },
});

const HomeScreen = ({ navigation }) => {
  return (
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
        <Button title="Clothing" onPress={() => navigation.navigate('Clothing')} />
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
  );
};
