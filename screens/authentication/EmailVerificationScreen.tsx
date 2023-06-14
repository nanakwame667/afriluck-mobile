import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../navigations/AuthNavigator";
import { useFormik } from "formik";
import * as yup from "yup";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import colors from "../../colors";
import { NavigationProp } from "@react-navigation/native";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email Address is required"),
});

const EmailVerificationScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        navigation.navigate("ForgotPassword");
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
            <Text style={styles.credentials}>
              Enter the email address used to sign up with us and we will send
              an email with instructions on how to reset your password.
            </Text>
            <InputField
              placeholder="Enter a valid email address"
              fieldType="text"
              label="Email"
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              error={formik.errors.email}
            />

            <Button
              title="Send Instructions"
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

export default EmailVerificationScreen;
