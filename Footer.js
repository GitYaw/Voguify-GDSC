import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

const Footer = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={24} color="black" />
        <Text style={styles.footerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Clothing')}
      >
        <Ionicons name="shirt" size={24} color="black" />
        <Text style={styles.footerButtonText}>Clothing</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('Expenses')}
      >
        <Ionicons name="wallet" size={24} color="black" />
        <Text style={styles.footerButtonText}>Stats</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#9c27b0', // Dark purple background color
    height: 80,
    borderTopWidth: 1,
    borderTopColor: 'black'
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'black',
    marginTop: 4,
  },
});

export default Footer;