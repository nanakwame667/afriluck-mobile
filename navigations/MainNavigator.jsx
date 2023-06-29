import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Image } from "react-native";
import { Badge } from "react-native-elements";
import BottomTabNavigator from "./BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import NotificationsScreen from "../screens/NotificationsScreen";
import { Fonts } from "../theme";
import colors from "../colors";
const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerStyle: { height: 120 },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerTitleStyle: { fontFamily: Fonts.medium, fontSize: 18 },
          headerTintColor: colors.heading,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
