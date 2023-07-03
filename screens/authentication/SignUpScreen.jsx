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
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import colors from "../../colors";
import CheckBox from "../../components/CheckBox";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name can't be longer than 50 characters")
    .required("Full Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  username: yup
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username can't be longer than 20 characters")
    .required("Username is required"),
  phoneNumber: yup
    .string()
    .matches(
      /^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Phone number must be 10 digits and may include a country code"
    )
    .required("Phone Number is required"),
});
const SignUpScreen = () => {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        navigation.navigate("SignUp2");
      } else {
        Alert.alert(
          "Validation Error",
          "Please fill in all the required fields."
        );
      }
    },
  });
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
            <Text style={styles.welcome}>Create Account</Text>
            <Text style={styles.credentials}>
              Register now to bet on the world’s biggest jackpots
            </Text>
            <InputField
              placeholder="Enter your full name"
              fieldType="text"
              label="Full Name"
              value={formik.values.fullname}
              onChangeText={formik.handleChange("fullname")}
              error={formik.errors.fullname}
            />
            <InputField
              placeholder="Enter your username"
              fieldType="text"
              label="User Name"
              value={formik.values.username}
              onChangeText={formik.handleChange("username")}
              error={formik.errors.username}
            />
            <InputField
              placeholder="Enter your email address"
              fieldType="email"
              label="Email Address"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              error={formik.errors.email}
            />
            <InputField
              placeholder="Enter your number"
              fieldType="phoneNumber"
              label="Phone Number"
              value={formik.values.phoneNumber}
              onChangeText={formik.handleChange("phoneNumber")}
              error={formik.errors.phoneNumber}
            />
            <Button title="Continue" onPress={() => formik.handleSubmit()} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardAvoidingView: {
    flex: 1,
    marginHorizontal: 16,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  names: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    marginBottom: 20,
    width: "50%",
    height: "10%",
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
    marginVertical: 20,
  },
});

export default SignUpScreen;
