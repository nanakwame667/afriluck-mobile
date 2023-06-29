import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Image } from "react-native";
import { Badge } from "react-native-elements";
import BottomTabNavigator from "./BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
