import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GamesNavigator from "./Games";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";
import ResultsNavigator from "./Results";
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
        component={GamesNavigator}
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
          tabBarIcon: "gift",
        }}
      />
      <Tab.Screen
        name="Results"
        component={ResultsNavigator}
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
