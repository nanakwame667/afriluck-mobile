import React from "react";
import SplashScreen from "../screens/SplashScreen";
import One from "../components/authentication/onboarding/one";
import Two from "../components/authentication/onboarding/two";
import GetStarted from "../components/authentication/onboarding/getStarted";
import Login from "../components/authentication/login";
import SignUp from "../components/authentication/signup";
import SignUp2 from "../components/authentication/signup2";
import EmailVerification from "../components/authentication/emailVerification";
import ForgotPassword from "../components/authentication/forgotPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
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
        name="Two"
        component={Two}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp2"
        component={SignUp2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailVerification"
        component={EmailVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
