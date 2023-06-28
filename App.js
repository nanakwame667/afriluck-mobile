import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigations/AppNavigator";
import AuthProvider from "./AuthContext/AuthContext";
import LoadFonts from "./loadFonts";

export default function App() {
  const fontLoaded = LoadFonts();
  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer key={fontLoaded ? "loaded" : "not-loaded"}>
      <StatusBar style="auto" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
