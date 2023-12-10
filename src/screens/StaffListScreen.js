// screens/StaffListScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  RefreshControl,
  Button,
} from "react-native";
import { List } from "react-native-paper";
import { IconButton } from "react-native-paper";
// Example of a relative path

const StaffListScreen = ({ route, navigation }) => {
  const { staff } = route;
  var [staffData, setStaffData] = useState([
    {
      id: 1,
      name: "John Smith",
      phoneNumber: "02 9988 2211",
      address: {
        street: "1 Code Lane",
        city: "Javaville",
        state: "NSW",
        postalCode: "0100",
        country: "Australia",
      },
    },
    {
      id: 2,
      name: "Sue White",
      phoneNumber: "03 8899 2255",
      address: {
        street: "16 Bit Way",
        city: "Byte Cove",
        state: "QLD",
        postalCode: "1101",
        country: "Australia",
      },
    },
    {
      id: 3,
      name: "Bob O’Bits",
      phoneNumber: "05 7788 2255",
      address: {
        street: "8 Silicon Road",
        city: "Cloud Hills",
        state: "VIC",
        postalCode: "1001",
        country: "Australia",
      },
    },
    {
      id: 4,
      name: "Mary Blue",
      phoneNumber: "06 4455 9988",
      address: {
        street: "4 Processor Boulevard",
        city: "Appletson",
        state: "NT",
        postalCode: "1010",
        country: "Australia",
      },
    },
    {
      id: 5,
      name: "Mick Green",
      phoneNumber: "02 9988 1122",
      address: {
        street: "700 Bandwidth Street",
        city: "Bufferland",
        state: "NSW",
        postalCode: "0110",
        country: "Australia",
      },
    },
    // Add more staff profiles as needed
  ]);

  const [data, setData] = useState(staffData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Perform your data filtering logic here
    // For example, filter out 'item3'
    const newData = staffData;
    setData(newData);

    setRefreshing(false);
  };

  const addNewStaff = (updatedData) => {
    const newStaffId = staffData.length + 1;

    const newStaffMember = {
      id: newStaffId,
      name: updatedData.name,
      phoneNumber: updatedData.phoneNumber,
      address: {
        street: updatedData.street,
        city: updatedData.city,
        state: updatedData.state,
        postalCode: updatedData.postalCode,
        country: updatedData.country,
      },
    };

    staffData.push(newStaffMember);
  };

  if (route.params != null) {
    const updateStaffById = (updatedData) => {
      const staffIndex = staffData.findIndex(
        (staff) => staff.id === updatedData.id
      );
      if (staffIndex !== -1) {
        staffData[staffIndex].name = updatedData.name;
        staffData[staffIndex].phoneNumber = updatedData.phoneNumber;
        staffData[staffIndex].address.street = updatedData.street;
        staffData[staffIndex].address.city = updatedData.city;
        staffData[staffIndex].address.state = updatedData.state;
        staffData[staffIndex].address.postalCode = updatedData.postalCode;
        staffData[staffIndex].address.country = updatedData.country;
      } else {
        addNewStaff(updatedData);
      }
    };
    updateStaffById({
      id: route.params.newStaff.id,
      name: route.params.newStaff.name,
      phoneNumber: route.params.newStaff.phoneNumber,
      street: route.params.newStaff.street,
      city: route.params.newStaff.city,
      state: route.params.newStaff.state,
      postalCode: route.params.newStaff.postalcode,
      country: route.params.newStaff.country,
    });

    route.params = null;
  }

  const handleSave = () => {
    navigation.navigate("AddUpdateStaffScreen");
  };
  const handleDeletePress = (i) => {
    staffData = staffData.filter((item) => item.id !== i.id);
    onRefresh();
  };

  return (
    <View style={styles.container}>
      {/* First Row */}
      <View style={styles.row}>
        <Text style={styles.text}>
          {" "}
          <Image
            source={require("../Icons/roi-image-resources/roi-logo.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
          {/* <Text style={styles.title}>ROI Staff Employees</Text> */}
        </Text>
      </View>

      {/* Second Row */}
      <View style={styles.row}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <List.Item
              title={item.name}
              onPress={() =>
                navigation.navigate("StaffDetails", { staff: item })
              }
              right={() => (
                <List.Item
                  title="Delete"
                  onPress={() => handleDeletePress(item)}
                />
              )}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        {/* <Text style={styles.text}>Item 4</Text> */}
      </View>

      <View style={styles.row}>
        <IconButton icon="plus" size={32} color="black" onPress={handleSave} />

        <Button
          title="Manual Refresh"
          style={{
            fontSize: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onRefresh}
        />
      </View>
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
    fontWeight: "bold",
    marginBottom: 16,
    flexDirection: "row",
  },
  logo: {
    width: 50,
    height: 60,
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    padding: 10,

    marginRight: 10,
  },
});

export default StaffListScreen;
