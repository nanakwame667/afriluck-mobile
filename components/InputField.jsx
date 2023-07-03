import React, { useState, useRef, forwardRef } from "react";
import {
  TextInput,
  View,
  Text,
  TextInputProps,
  StyleSheet,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import colors from "../colors";
import PhoneNumberInput from "react-native-phone-number-input";
import PhoneInput from "react-native-phone-number-input";
import format from "date-fns/format";
import CustomText from "./CustomText";
import { Fonts } from "../theme";

const InputField = forwardRef((props, ref) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [remainingChars, setRemainingChars] = useState(props.characterLimit);
  const phoneInputRef = useRef(null);

  const handleInputChange = (value) => {
    if (
      props.characterLimit !== undefined &&
      value.length > props.characterLimit
    ) {
      return;
    }
    setRemainingChars(
      props.characterLimit ? props.characterLimit - value.length : undefined
    );
    if (props.onChangeText) {
      props.onChangeText(value);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleDateChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(Platform.OS === "ios");
  };

  const keyboardTypeMap = {
    phoneNumber: "phone-pad",
    email: "email-address",
    search: "web-search",
    text: "default",
  };

  const keyboardType = keyboardTypeMap[props.fieldType || "text"];

  const handleDatePress = () => {
    setShowDatePicker(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {props.label && <Text style={styles.label}>{props.label}</Text>}
        {props.fieldType === "password" ? (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              ref={ref}
              secureTextEntry={!passwordVisible}
              style={styles.input}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
            <FontAwesome
              name={passwordVisible ? "eye-slash" : "eye"}
              size={22}
              color={colors.space}
              onPress={togglePasswordVisibility}
            />
          </View>
        ) : props.fieldType === "textarea" ? (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              ref={ref}
              multiline
              style={[styles.input, styles.textArea]}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
          </View>
        ) : props.fieldType === "email" ? (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              ref={ref}
              style={[styles.input, styles.textArea]}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
          </View>
        ) : props.fieldType === "datepicker" ? (
          <View style={styles.inputContainer}>
            <TouchableOpacity
              onPress={handleDatePress}
              style={styles.inputWrapper}
            >
              <TextInput
                {...props}
                ref={ref}
                editable={false}
                placeholder={date ? format(date, "MM-dd-yyyy") : "MM-DD-YYYY"}
                style={styles.input}
              />
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display="calendar"
                onChange={handleDateChange}
              />
            )}
            <TouchableOpacity onPress={handleDatePress}>
              <FontAwesome name="calendar" size={22} color="gray" />
            </TouchableOpacity>
          </View>
        ) : props.fieldType === "phoneNumber" ? (
          <PhoneInput
            {...props}
            ref={phoneInputRef}
            defaultCode="GH"
            onChangeFormattedText={handleInputChange}
            containerStyle={styles.inputContainer1}
            textInputStyle={styles.input1}
            textContainerStyle={{ backgroundColor: "transparent" }}
          />
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              {...props}
              ref={ref}
              style={styles.input}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
          </View>
        )}
        {props.error && (
          <CustomText style={styles.error}>{props.error}</CustomText>
        )}
        {props.characterLimit && remainingChars !== undefined && (
          <CustomText style={styles.remaining}>
            Remaining characters: {remainingChars}
          </CustomText>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.regular,
    marginBottom: 20,
  },
  label: {
    fontFamily: Fonts.regular,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.space,
    borderRadius: 10,
    padding: 14,
    height: 64,
    width: "100%",
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.space,
    borderRadius: 10,
    backgroundColor: "transparent",
    height: 64,
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  input: {
    flex: 1,
    width: "100%",
    fontFamily: Fonts.regular,
  },
  input1: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  remaining: {
    marginTop: 5,
  },
  textArea: {
    height: 100,
  },
});

export default InputField;
