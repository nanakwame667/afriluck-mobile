import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";
import { CustomTabBar } from "./CustomTabBar";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="Games"
        component={GamesScreen}
        options={{
          headerShown: false,
          tabBarIcon: "rocket1",
        }}
      />
      <Tab.Screen
        name="Scratch"
        component={ScratchCardScreen}
        options={{
          headerShown: false,
          tabBarIcon: "barcode",
        }}
      />
      <Tab.Screen
        name="Results"
        component={ResultsScreen}
        options={{
          headerShown: false,
          tabBarIcon: "profile",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: "user",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;