// screens/StaffDetailsScreen.js
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

const StaffDetailsScreen = ({ navigation, route }) => {
  const { staff } = route.params;
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
        padding: 20,
      }}
    >
      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Name :   
        </Text>
        <Text style={{ fontSize: 20,  padding:20 }}>
           {staff.name}
        </Text>
      </view>
      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Phone Number  :
        </Text>
        <Text style={{ fontSize: 20,  padding:20  }}>
         {staff.phoneNumber}
        </Text>
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> ** Address ** </Text>
        
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> street :</Text>
        <Text style={{ fontSize: 20,  padding:20  }}>
          {staff.address.street}
        </Text>
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> city :</Text>
        <Text style={{ fontSize: 20,  padding:20  }}>
          {staff.address.city}
        </Text>
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> state :</Text>
        <Text style={{ fontSize: 20,  padding:20  }}>
          {staff.address.state}
        </Text>
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> postalCode :</Text>

        <Text style={{ fontSize: 20,  padding:20  }}>
          {staff.address.postalCode}
        </Text>
      </view>

      <view style={styles.row}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}> country :</Text>
        <Text style={{ fontSize: 20,  padding:20  }}>
          {staff.address.country}
        </Text>
      </view>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          title="Update"
          onPress={() =>
            navigation.navigate("AddUpdateStaffScreen", {
              id: staff.id,
            })
          }
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
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  text: {
    padding: 10,

    marginRight: 10,
  },
});

export default StaffDetailsScreen;
