import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import backgroundImage from '../assets/primary_background.png';

import { database, auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LandingView = ({navigation}) => {

  const handleLogin = async () => {
      navigation.navigate('Login');
  }; 

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Get a Fit Check with Voguify</Text>
          <Text style={styles.subtitle}>Plan out your weekly fits and budget your clothing expenses all at once!</Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
        >
          <Text style={styles.registerText}>Register</Text>
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
  loginButton: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#00aeef',
    marginBottom: 20,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
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

export default LandingView;
