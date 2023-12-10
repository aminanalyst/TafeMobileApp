// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StaffListScreen from '../screens/StaffListScreen';
import StaffDetailsScreen from '../screens/StaffDetailsScreen';
import AddUpdateStaffScreen from '../screens/AddUpdateStaffScreen';
 
 

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StaffList">
    
        <Stack.Screen name="StaffList" component={StaffListScreen} />
        <Stack.Screen name="StaffDetails" component={StaffDetailsScreen} />
        <Stack.Screen name="AddUpdateStaffScreen" component={AddUpdateStaffScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
