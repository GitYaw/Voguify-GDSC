import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import { DatePicker } from '@react-native-community/datetimepicker';
import loginBackground from '../assets/new_item_background.png';

const NewItemView = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  const [baginess, setBaginess] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  const [baginessDropdownVisible, setBaginessDropdownVisible] = useState(false);
  const [categoryOptions] = useState(['Pants', 'Shorts', 'Tshirt', 'Jacket', 'Shoes']);
  const [baginessOptions] = useState(['Baggy', 'Skinny', 'Fit']);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setCategoryDropdownVisible(false);
  };

  const handleBaginessSelect = (selectedBaginess) => {
    setBaginess(selectedBaginess);
    setBaginessDropdownVisible(false);
  };

  

  const handleAddItem = () => {
    // Handle adding the item with the selected category
  };

  return (
    <ImageBackground source={loginBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add New Item</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder='Item Name'
          onChangeText={setItemName}
          value={itemName}
        />
        <TextInput
          style={styles.input}
          placeholder='Price'
          onChangeText={setPrice}
          value={price}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Color'
          onChangeText={setColor}
          value={color}
        />

        {/* Category Dropdown */}
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setCategoryDropdownVisible(true)}
        >
          <Text style={styles.dropdownText}>{category ? category : 'Select Category'}</Text>
        </TouchableOpacity>
        <Modal
          visible={categoryDropdownVisible}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setCategoryDropdownVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            {categoryOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleCategorySelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        {/* Baginess Dropdown */}
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setBaginessDropdownVisible(true)}
        >
          <Text style={styles.dropdownText}>{baginess ? baginess : 'Select Fit'}</Text>
        </TouchableOpacity>
        <Modal
          visible={baginessDropdownVisible}
          animationType='fade'
          transparent={true}
          onRequestClose={() => setBaginessDropdownVisible(false)}
        >
          <View style={styles.dropdownContainer}>
            {baginessOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleBaginessSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        {/* Date Picker */}
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.loginText}>Select Date Bought</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            value={new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              // Handle date selection
            }}
            style={styles.datePicker}
          />
        )}

        {/* Add Button */}
        <TouchableOpacity
          onPress={handleAddItem}
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Add</Text>
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
    color: 'black',
    fontWeight: 'bold',
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
  dropdownButton: {
    height: 60,
    backgroundColor: '#F1F4FF',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   dropdownItem: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 10, // Adjust the padding to make the options narrower
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        width: '70%', // Adjust the width to make the options narrower
        alignItems: 'center',
    },
  datePickerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#00aeef',
    marginBottom: 20,
  },
  datePicker: {
    width: '100%',
    height: 200,
    marginBottom: 20,
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
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default NewItemView;
