import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText";
import Button from "../Button";
import InputField from "../InputField";
import colors from "../../colors";
import { Fonts } from "../../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import CustomDropDown from "../InputDropdown";

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
const EditProfile = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const items = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
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
        alert("Updated Successfully");
      } else {
        Alert.alert(
          "Validation Error",
          "Please fill in all the required fields."
        );
      }
    },
  });

  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
      },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.error) {
          console.log("ImagePicker Error: ", response.error);
        } else {
          setSelectedImage(response.uri);
        }
      }
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.uploadContainer}>
        <TouchableOpacity
          style={styles.imageUpload}
          onPress={handleImageUpload}
        >
          {selectedImage ? (
            <Image
              style={styles.profileImage}
              source={{ uri: selectedImage }}
            />
          ) : (
            <Image source={require("../../assets/images/image-upload.png")} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImageUpload}>
          <CustomText
            weight="semibold"
            style={{
              fontSize: 20,
              color: colors.accent,
              paddingHorizontal: 20,
            }}
          >
            Photo Upload +
          </CustomText>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.form}>
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
        <View style={styles.dropdown}>
          <CustomDropDown
            items={items}
            onValueChange={setSelectedValue}
            placeholder="Select Type"
            label={"Sex"}
            labelStyle={{ fontSize: 14, color: colors.title }}
          />
        </View>
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
      </ScrollView>
      <View style={styles.button}>
        <Button title="Save" onPress={() => formik.handleSubmit()} />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.background,
  },
  dropdown: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
  },
  uploadContainer: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  imageUpload: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 60,
  },
  form: {
    flex: 0.6,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 20,
  },
  button: {
    paddingHorizontal: 20,
  },
});
