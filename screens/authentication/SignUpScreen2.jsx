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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import colors from "../../colors";
import CheckBox from "../../components/CheckBox";
import { useFormik } from "formik";
import * as yup from "yup";
import CustomDropDown from "../../components/InputDropdown";

const validationSchema = yup.object().shape({
  network: yup
    .string()
    .oneOf(["MTN", "Vodafone ", "Airtel Tigo"], "Invalid network option")
    .required("Network is required"),
  sex: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Invalid sex option")
    .required("Sex is required"),
  dob: yup.string().optional(),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});
const SignUpScreenTwo = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState(null);

  const items = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const items1 = [
    { label: "MTN", value: "MTN" },
    { label: "Vodafone", value: "Vodafone" },
    { label: "AirtelTigo", value: "AirtelTigo" },
  ];
  const navigation = useNavigation();
  const handleOptionSelected = (option) => {
    console.log("Selected option:", option);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckedChanged = useCallback((checked) => {
    setIsChecked(checked);
  }, []);

  const formik = useFormik({
    initialValues: {
      network: "",
      sex: "",
      dob: "",
      newPassword: "",
      confirmPassword: "",
    },
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
            <Text style={styles.welcome}>Create Account</Text>
            <Text style={styles.credentials}>
              Register now to bet on the world’s biggest jackpots
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                zIndex: 1000,
              }}
            >
              <View style={styles.dropdown}>
                <CustomDropDown
                  items={items1}
                  onValueChange={setSelectedValue1}
                  placeholder="Select Type"
                  label={"Mobile Network"}
                  labelStyle={{ fontSize: 14, color: colors.title }}
                />
              </View>
              <View style={[styles.dropdown, { paddingLeft: 20 }]}>
                <CustomDropDown
                  items={items}
                  onValueChange={setSelectedValue}
                  placeholder="Select Type"
                  label={"Sex"}
                  labelStyle={{ fontSize: 14, color: colors.title }}
                />
              </View>
            </View>
            <ScrollView style={{ flex: 1, width: "100%" }}>
              <InputField
                fieldType="datepicker"
                label="Date Of Birth"
                placeholder="mm-dd-yyyy"
                value={formik.values.dob}
                onChangeText={formik.handleChange("dob")}
                error={formik.errors.dob}
              />
              <InputField
                placeholder="Enter your new password"
                fieldType="password"
                label="New Password"
                value={formik.values.newPassword}
                onChangeText={formik.handleChange("newPassword")}
                error={formik.errors.newPassword}
              />
              <InputField
                placeholder="Confirm your new password"
                fieldType="password"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChangeText={formik.handleChange("confirmPassword")}
                error={formik.errors.confirmPassword}
              />
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <View
        style={{
          flex: 0.28,
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "100%",
          paddingTop: 20,
          paddingHorizontal: 16,
        }}
      >
        <CheckBox
          label="By creating a new account I accept the terms and conditions."
          isChecked={isChecked}
          onCheckChange={handleCheckedChanged}
        />
        <View style={{ width: "100%" }}>
          <Button
            title="Create Account"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
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
    paddingHorizontal: 16,
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
  dropdown: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
  },
});

export default SignUpScreenTwo;
