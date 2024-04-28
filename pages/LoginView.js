import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, ImageBackground } from 'react-native';

import backgroundImage from '../assets/primary_background.png';

const LoginView = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login', `Username: ${username}, Password: ${password}`);
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
          onChangeText={setUsername}
          value={username}
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
