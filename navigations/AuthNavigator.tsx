import React from "react";
import SplashScreen from "../screens/SplashScreen";
import One from "../components/authentication/onboarding/one";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignUpScreen from "../screens/authentication/SignUpScreen";
import EmailVerificationScreen from "../screens/authentication/EmailVerificationScreen";
import ForgotPasswordScreen from "../screens/authentication/ForgotPasswordScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackParamList = {
  SplashScreen: undefined;
  One: undefined;
  Login: undefined;
  SignUp: undefined;
  EmailVerification: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="One"
        component={One}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
