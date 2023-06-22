import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ResultsScreen from "../screens/ResultsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";
export type StackParamList2 = {
  Home: undefined;
  Results: undefined;
  Profile: undefined;
  Games: undefined;
  Scratch: undefined;
};

const Tab = createBottomTabNavigator<StackParamList2>();
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Games" component={GamesScreen} />
      <Tab.Screen name="Scratch" component={ScratchCardScreen} />
      <Tab.Screen name="Results" component={ResultsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
