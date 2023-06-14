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
import { NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../navigations/AuthNavigator";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();
  const formik = useFormik({
    initialValues: { newPassword: "", confirmPassword: "" },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        navigation.navigate("Login");
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
            <Text style={styles.welcome}>Password Reset</Text>
            <Text style={styles.credentials}>Create a new password</Text>
            <InputField
              placeholder="Enter your password"
              fieldType="password"
              label="Password"
              value={formik.values.newPassword}
              onChangeText={formik.handleChange("newPassword")}
              error={formik.touched.newPassword && formik.errors.newPassword}
            />
            <InputField
              placeholder="Confirm your new password"
              fieldType="password"
              label="Confirm Password"
              value={formik.values.confirmPassword}
              onChangeText={formik.handleChange("confirmPassword")}
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />

            <Button
              title="Reset Password"
              onPress={() => formik.handleSubmit()}
            />
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

export default ForgotPasswordScreen;
