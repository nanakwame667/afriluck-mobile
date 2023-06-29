import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../Button";
import InputField from "../InputField";
import colors from "../../colors";

const validationSchema = yup.object().shape({
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

const ChangePassword = () => {
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        alert("Update successful!");
      } else {
        Alert.alert(
          "Validation Error",
          "Please fill in all the required fields."
        );
      }
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputField
          placeholder="Enter your new password"
          fieldType="password"
          label="Password"
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
      </View>
      <View style={styles.button}>
        <Button title="Save" onPress={() => formik.handleSubmit()} />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  form: {
    flex: 0.9,
    flexDirection: "column",
    width: "100%",
    paddingVertical: 60,
  },
  button: {},
});
