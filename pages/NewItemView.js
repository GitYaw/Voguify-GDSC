import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Alert, Modal, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { database, storage } from '../firebase-config';
import { ref as databaseRef, push } from 'firebase/database';
import { ref as storageRef, uploadBytes } from 'firebase/storage';

import backgroundImage from '../assets/primary_background.png';

const NewItemView = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  // const [color, setColor] = useState('');
  const [category, setCategory] = useState('');
  // const [baginess, setBaginess] = useState('');

  // const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [categoryDropdownVisible, setCategoryDropdownVisible] = useState(false);
  // const [baginessDropdownVisible, setBaginessDropdownVisible] = useState(false);
  const [categoryOptions] = useState(['Pants', 'Shorts', 'Tshirt', 'Jacket', 'Shoes']);
  // const [baginessOptions] = useState(['Baggy', 'Skinny', 'Fit']);

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setCategoryDropdownVisible(false);
  };

  // const handleBaginessSelect = (selectedBaginess) => {
  //   setBaginess(selectedBaginess);
  //   setBaginessDropdownVisible(false);
  // };

  // const handleDateChange = (event, selectedDate) => {
  //   setShowDatePicker(false); // Hide the date picker
  //   if (selectedDate) {
  //     setPurchaseDate(selectedDate); // Set the selected date in your state
  //   }
  // };

  // const showDatePickerModal = () => {
  //   setShowDatePicker(true); // Show the date picker modal
  // };

  const handleImagePicker  = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    

    // console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };
  
  
  const handleAddItem = async () => {
    if (!itemName || !price || !purchaseDate) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const itemPrice = parseFloat(price);

    if (isNaN(itemPrice) || itemPrice <= 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    const purchasedDate = new Date(purchaseDate);

    if (isNaN(purchasedDate.getTime())) {
      Alert.alert('Error', 'Please enter a valid purchase date.');
      return;
    }

    if (selectedImage) {
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const imageRef = storageRef(storage, `clothingImages/${itemName}`);

      await uploadBytes(imageRef, blob)
        .then(() => {
          Alert.alert('Success', 'Image uploaded');
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
          Alert.alert('Error', 'Failed to upload image. Please try again later.');
          return;
        });
    }

    push(databaseRef(database, '/clothing'), {
      name: itemName,
      price: itemPrice,
      date: purchasedDate.toISOString(),
      category: category,
    })
      .then(() => {
        Alert.alert('Success', 'Clothing item added successfully.');
        setItemName('');
        setPrice('');
        setPurchaseDate('');
        setCategory('');
        setSelectedImage(null);
      })
      .catch((error) => {
        console.error('Error adding item to Firebase:', error);
        Alert.alert('Error', 'Failed to add clothing item. Please try again later.');
      });
  };


  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
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
        {/* <TextInput
          style={styles.input}
          placeholder='Color'
          onChangeText={setColor}
          value={color}
        /> */}

        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          value={purchaseDate}
          onChangeText={setPurchaseDate}
        />

        {/* Add button to show date picker */}
        {/* <TouchableOpacity style={styles.datePickerButton} onPress={showDatePickerModal}>
          <Text style={styles.buttonText}>Select Purchase Date</Text>
        </TouchableOpacity> */}
        {/* Date picker modal */}
        {/* {showDatePicker && (
          <DateTimePicker
            value={purchaseDate || new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
            onChange={handleDateChange}
          />
        )} */}


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
        {/* <TouchableOpacity
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
        </Modal> */}

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleImagePicker}
        >
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>


        {/* Add Button */}
        <TouchableOpacity
          onPress={handleAddItem}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryText}>Add Item</Text>
        </TouchableOpacity>

        

        {/* Display selected image */}
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}

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
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    width: '70%',
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
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#00aeef',
    marginBottom: 20,
  },
  primaryText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  selectedImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default NewItemView;
