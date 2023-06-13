import { SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import globalStyles from "../styles/globalStyles";
import { StackNavigationProp } from "@react-navigation/stack";

type ParamList = {
  One: undefined;
};

interface SplashProps {
  navigation: StackNavigationProp<ParamList, "One">;
}
const SplashScreen: React.FC<SplashProps> = ({ navigation }) => {
  const { container } = globalStyles;

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("One");
    }, 3000);
  }, [navigation]);
  return (
    <SafeAreaView style={container}>
      <Image source={require("../assets/images/logo.png")} />
    </SafeAreaView>
  );
};

export default SplashScreen;
