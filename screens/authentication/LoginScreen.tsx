import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import colors from "../../colors";
import CheckBox from "../../components/CheckBox";
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../navigations/AuthNavigator";

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedChanged = useCallback((checked: boolean) => {
    setIsChecked(checked);
  }, []);

  const handleForgotPasswordPress = useCallback(() => {
    navigation.navigate("ForgotPassword");
  }, [navigation]);

  const handleCreateAccountPress = useCallback(() => {
    navigation.navigate("SignUp");
  }, [navigation]);

  const handleLoginPress = useCallback(() => {
    alert("Hello");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.innerContainer}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.welcome}>Welcome Back</Text>
            <Text style={styles.credentials}>Enter your credentials</Text>
            <InputField
              placeholder="Enter your number"
              fieldType="phoneNumber"
              label="Phone Number"
            />
            <InputField
              placeholder="Enter your password"
              fieldType="password"
              label="Password"
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                label="Remember Me"
                isChecked={isChecked}
                onCheckChange={handleCheckedChanged}
              />
              <TouchableOpacity onPress={handleForgotPasswordPress}>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.separator}>or</Text>
            <TouchableOpacity onPress={handleCreateAccountPress}>
              <Text style={styles.account}>Create An Account</Text>
            </TouchableOpacity>
            <Button title="Login" onPress={handleLoginPress} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 20,
  },
  welcome: {
    color: colors.primary,
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
    marginVertical: 12,
  },
  credentials: {
    color: colors.space,
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 34,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  forgot: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: "600",
  },
  separator: {
    fontSize: 20,
    marginVertical: 6,
    color: colors.space,
  },
  account: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: "600",
    textDecoration: "underline",
    marginVertical: 20,
  },
});

export default LoginScreen;
