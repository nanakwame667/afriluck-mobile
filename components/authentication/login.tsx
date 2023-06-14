import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Formik, FormikProps } from "formik";
import InputField from "../inputfield";
import colors from "../../colors";

interface LoginProps {
  phoneNumber: number;
  password: string;
}
const LoginForm = () => {
  const { width } = useWindowDimensions();
  const values = {
    phoneNumber: 554588483,
    password: "password",
  };
  return (
    <View style={[styles.container, { width }]}>
      <Formik initialValues={values} onSubmit={() => console.log("Success")}>
        {(props: FormikProps<LoginProps>) => (
          <View style={styles.form}>
            <InputField
              fieldType="phoneNumber"
              placeholder="Enter your phone number"
              onChangeText={props.handleChange("phoneNumber")}
              value={props.values.phoneNumber.toString()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
