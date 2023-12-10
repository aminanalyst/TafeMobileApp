import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import SaveIcon from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";
const AddUpdateStaffScreen = ({ navigation, route }) => {
 
  var StaffId = 0;

  if (route.params != undefined) {
    StaffId = route.params.id;
  }

  var [staffName, setStaffName] = useState("");
  var [StaffCity, setStaffCity] = useState("");

  var [StaffPhoneNumber, setStaffPhoneNumber] = useState("");
  var [StaffStreet, setStaffStreet] = useState("");
  var [StaffState, setStaffState] = useState("");
  var [StaffPostalCode, setStaffPostalCode] = useState("");
  var [StaffCountry, setStaffCountry] = useState("");

  const handleSave = () => {
    const newStaff = {
      id: StaffId,
      name: staffName,
      phoneNumber: StaffPhoneNumber,
      street: StaffStreet,
      city: StaffCity,
      state: StaffState,
      postalcode: StaffPostalCode,
      country: StaffCountry,
    };
    // Update the staff list on the StaffListScreen
    navigation.navigate("StaffList", { newStaff });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Staff</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Staff Name"
        value={staffName}
        onChangeText={(text) => setStaffName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff phoneNumber"
        value={StaffPhoneNumber}
        onChangeText={(text) => setStaffPhoneNumber(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff street"
        value={StaffStreet}
        onChangeText={(text) => setStaffStreet(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff City"
        value={StaffCity}
        onChangeText={(text) => setStaffCity(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff state"
        value={StaffState}
        onChangeText={(text) => setStaffState(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff postalCode"
        value={StaffPostalCode}
        onChangeText={(text) => setStaffPostalCode(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Staff country"
        value={StaffCountry}
        onChangeText={(text) => setStaffCountry(text)}
      />

      <IconButton icon="content-save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default AddUpdateStaffScreen;
