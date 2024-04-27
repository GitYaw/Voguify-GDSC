import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
// import ProfileScreen from './pages/ProfileView'
// import StatsView from './pages/StatsView'
// import HomeView from './pages/HomeView'
// import ClothingView from './pages/ClothingView'
// import BudgetView from './pages/BudgetView'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="HomeView" component={HomeView} />
        <Stack.Screen name="Stats" component={StatsView} />
        <Stack.Screen name="Clothing" component={ClothingView} />
        <Stack.Screen name="Budget" component={BudgetView} /> */}
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
  },
});

const HomeScreen = ({navigation}) => {
  return (
    <>
    <Button
      title="Go to Jane's profile"
      // onPress={() =>
      //   navigation.navigate('Profile', {name: 'Jane'})
      // }
    />
    <Button
      title="Go to Jane's Stats"
      // onPress={() =>
      //   navigation.navigate('Stats', {name: 'Jane'})
      // }
    />
    <Button
      title="Go to Jane's Home"
      // onPress={() =>
      //   navigation.navigate('HomeView', {name: 'Jane'})
      // }
    />
    <Button
      title="Go to Jane's clothing"
      // onPress={() =>
      //   navigation.navigate('Clothing', {name: 'Jane'})
      // }
    />
    <Button
      title="Go to Jane's budget"
      // onPress={() =>
      //   navigation.navigate('Budget', {name: 'Jane'})
      // }
     /> 
    </>
  );
};

