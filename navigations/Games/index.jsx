import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GamesScreen from "../../screens/games/GamesScreen";
import SingleGame from "../../screens/games/SingleGame/SingleGame";
import NumberPick from "../../screens/games/SingleGame/NumberPick";
import Payment from "../../screens/games/SingleGame/Payment";

const Stack = createStackNavigator();

const GamesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GamesHub"
        component={GamesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleGame"
        component={SingleGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NumberPick"
        component={NumberPick}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GamesNavigator;
