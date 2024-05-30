import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



import backgroundImage from '../assets/primary_background.png';

import { database, auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  // setting current_user to an empty sting so that it is initialized
  // const setUserToEmpty = async () => {
  //   try {
  //     await AsyncStorage.setItem('current_user', '');
  //     console.log('Current user set to empty');
  //   } catch (error) {
  //     console.error('Error signing out: ', error);
  //   }
  // };
  // setUserToEmpty();

  const storeData = async (auth) => {
    try {
      await AsyncStorage.setItem('current_user', email);
      console.log(email)
    } catch (e) {
      console.error("async storage")
    }
  };

  const handleLogin = async () => {
    Alert.alert('Login', `Email: ${email}, Password: ${password}`);

    // returns a console message if email and password were found
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User logged in successfully, navigate to message board
      console.log('You logged in!');
      console.log(userCredential.user);
      storeData(auth);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };


  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Login Here</Text>
          <Text style={styles.subtitle}>Welcome back!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={}
          style={styles.registerButton}
        >
          <Text style={styles.registerText}>Create new account</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
    color: '#9B5094',
    fontWeight: 'bold',
  },
  subtitle: {
    fontFamily: 'poppins',
  },
  input: {
    height: 60,
    borderColor: 'gray',
    backgroundColor: '#F1F4FF',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 10,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#00aeef',
    marginBottom: 20,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#F1F4FF',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  registerText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#9B5094',
  },
});

export default LoginView;
