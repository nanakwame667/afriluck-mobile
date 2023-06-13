import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import globalStyles from "../../../styles/globalStyles";

const One = () => {
  const { container, text } = globalStyles;
  return (
    <SafeAreaView style={container}>
      <Text style={text}>Onboarding One</Text>
    </SafeAreaView>
  );
};

export default One;
