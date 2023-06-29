import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import NotificationsScreen from "../screens/NotificationsScreen";
import { Fonts } from "../theme";
import colors from "../colors";
import EditProfile from "../components/Profile/EditProfile";
import Terms from "../components/Profile/Terms";
import ChangePassword from "../components/Profile/ChangePassword";
import PaymentMethod from "../components/Profile/PaymentMethod";
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
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{
          headerStyle: { height: 120 },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerTitleStyle: { fontFamily: Fonts.medium, fontSize: 18 },
          headerTintColor: colors.heading,
        }}
      />
      <Stack.Screen
        name="Update Password"
        component={ChangePassword}
        options={{
          headerStyle: { height: 120 },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerTitleStyle: { fontFamily: Fonts.medium, fontSize: 18 },
          headerTintColor: colors.heading,
        }}
      />
      <Stack.Screen
        name="Terms & Conditions"
        component={Terms}
        options={{
          headerStyle: { height: 120 },
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerTitleStyle: { fontFamily: Fonts.medium, fontSize: 18 },
          headerTintColor: colors.heading,
        }}
      />
      <Stack.Screen
        name="Payment Method"
        component={PaymentMethod}
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
