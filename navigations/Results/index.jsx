import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResultsScreen from "../../screens/ResultsScreen";
import ResultsScreen2 from "../../screens/ResultsScreen2";

const Stack = createStackNavigator();
const ResultsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Results1"
        component={ResultsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Results2"
        component={ResultsScreen2}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ResultsNavigator;
