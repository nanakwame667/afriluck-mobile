import { View, Text } from "react-native";
import React from "react";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

const AppNavigator = () => {
  const userAuthenticated = false; // Replace with your authentication state logic

  return userAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
