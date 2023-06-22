import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigations/AppNavigator";
import AuthProvider from "./AuthContext/AuthContext";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        Gotham: require("./assets/fonts/Gotham-Book.otf"),
        GothamMedium: require("./assets/fonts/Gotham-Medium.otf"),
        GothamBold: require("./assets/fonts/Gotham-Bold.otf"),
        GothamBlack: require("./assets/fonts/Gotham-Black.otf"),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Return a loading indicator or placeholder until the fonts are loaded
  }

  return (
    <NavigationContainer key={fontsLoaded ? "loaded" : "not-loaded"}>
      <StatusBar style="auto" />
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
