// src/screens/AddUpdateStaffScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddUpdateStaffScreen = ({ navigation }) => {
  const [staffName, setStaffName] = useState('');
  const [staffId, setStaffId] = useState('');

  const saveStaffLocally = async () => {
    try {
      const staffData = { id: staffId, name: staffName };
      await AsyncStorage.setItem('staffData', JSON.stringify(staffData));
      alert('Staff data saved locally!');
    } catch (error) {
      alert('Error saving staff data locally');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add/Update Staff Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Staff ID"
        value={staffId}
        onChangeText={(text) => setStaffId(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Staff Name"
        value={staffName}
        onChangeText={(text) => setStaffName(text)}
      />
      <Button mode="contained" onPress={saveStaffLocally}>
        Save Locally
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
});

export default AddUpdateStaffScreen;
