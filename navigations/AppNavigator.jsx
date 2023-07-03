import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import { AuthContext } from "../AuthContext/AuthContext";

const RootStack = createStackNavigator();

const AppNavigator = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AppNavigator must be used within an AuthProvider.");
  }

  const { userAuthenticated } = authContext;

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {userAuthenticated ? (
        <RootStack.Screen name="Main" component={MainNavigator} />
      ) : (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
