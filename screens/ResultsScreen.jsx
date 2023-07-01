import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import CustomText from "../components/CustomText";
import CustomDropDown from "../components/InputDropdown";
import colors from "../colors";
import { Fonts } from "../theme";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";

const validationSchema = yup.object().shape({
  start: yup.string().optional(),
  end: yup.string().optional(),
});
const ResultsScreen = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);

  const items = [
    { label: "Classic", value: "Classic" },
    { label: "Others", value: "Others" },
  ];
  const formik = useFormik({
    initialValues: {
      start: "",
      end: "",
    },
    validationSchema,
    onSubmit: () => {
      if (formik.isValid) {
        navigation.navigate("Results2");
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
      <CustomText
        weight="medium"
        style={{ fontSize: 24, color: colors.title, paddingVertical: 20 }}
      >
        GAMES RESULTS
      </CustomText>
      <View style={styles.dropdown}>
        <CustomDropDown
          items={items}
          onValueChange={setSelectedValue}
          placeholder="Select Type"
          label={"Select the game type"}
        />
      </View>
      <ScrollView style={styles.forms} showsVerticalScrollIndicator={false}>
        <View style={styles.bodyText}>
          <CustomText
            weight="semibold"
            style={{ fontSize: 20, color: colors.background }}
          >
            70 MILLION MEGA JACKPOT
          </CustomText>
        </View>
        <InputField
          fieldType="datepicker"
          label="Start Date"
          placeholder="mm-dd-yyyy"
          value={formik.values.start}
          onChangeText={formik.handleChange("start")}
          error={formik.errors.start}
        />
        <InputField
          fieldType="datepicker"
          label="End Date"
          placeholder="mm-dd-yyyy"
          value={formik.values.end}
          onChangeText={formik.handleChange("end")}
          error={formik.errors.end}
        />
      </ScrollView>
      <View style={styles.btn}>
        <Button title="Continue" onPress={() => formik.handleSubmit()} />
      </View>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  dropdown: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
    marginVertical: 20,
  },
  bodyText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 80,
    marginVertical: 20,
  },
  forms: {
    flex: 0.2,
  },
  btn: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
