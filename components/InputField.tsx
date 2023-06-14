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
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import colors from "../colors";
import PhoneNumberInput from "react-native-phone-number-input";
import PhoneInput from "react-native-phone-number-input";

interface InputFieldProps extends TextInputProps {
  fieldType?:
    | "textarea"
    | "text"
    | "password"
    | "phoneNumber"
    | "email"
    | "search"
    | "datepicker";
  label?: string;
  error?: string;
  onEnterPress?: (value: string) => void;
  characterLimit?: number;
  required?: boolean;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      fieldType = "text",
      label,
      error,
      onEnterPress,
      characterLimit,
      required,
      ...props
    },
    ref
  ) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const [remainingChars, setRemainingChars] = useState(characterLimit);
    const phoneInputRef = useRef<PhoneInput>(null);

    const handleInputChange = (value: string) => {
      if (characterLimit !== undefined && value.length > characterLimit) {
        return;
      }
      setRemainingChars(
        characterLimit ? characterLimit - value.length : undefined
      );
      if (props.onChangeText) {
        props.onChangeText(value);
      }
    };

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const handleDateChange = (event: any, selectedDate?: Date) => {
      const currentDate = selectedDate || date;
      setDate(currentDate);
    };

    const keyboardTypeMap: { [key: string]: any } = {
      phoneNumber: "phone-pad",
      email: "email-address",
      search: "web-search",
      text: "default",
    };

    const keyboardType = keyboardTypeMap[fieldType || "text"];

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}
          {fieldType === "password" ? (
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
          ) : fieldType === "textarea" ? (
            <TextInput
              {...props}
              ref={ref}
              multiline
              style={[styles.input, styles.textArea]}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
          ) : fieldType === "datepicker" ? (
            <View style={styles.inputContainer}>
              <TextInput
                {...props}
                ref={ref}
                editable={false}
                value={date ? date.toISOString() : ""}
                style={styles.input}
                keyboardType={keyboardType}
              />
              {Platform.OS === "android" && (
                <DateTimePicker
                  value={date || new Date()}
                  mode="date"
                  display="default"
                  onChange={handleDateChange}
                />
              )}
            </View>
          ) : fieldType === "phoneNumber" ? (
            <PhoneInput
              {...props}
              ref={phoneInputRef}
              defaultCode="GH" // You can provide additional props to the PhoneNumberInput component
              onChangeFormattedText={handleInputChange}
              containerStyle={styles.inputContainer1}
              textInputStyle={styles.input1}
              textContainerStyle={{ backgroundColor: "transparent" }}
            />
          ) : (
            <TextInput
              {...props}
              ref={ref}
              style={styles.input}
              keyboardType={keyboardType}
              onChangeText={handleInputChange}
            />
          )}
          {error && <Text style={styles.error}>{error}</Text>}
          {characterLimit && remainingChars !== undefined && (
            <Text style={styles.remaining}>
              Remaining characters: {remainingChars}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
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
  input: {
    flex: 1,
    width: "100%",
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
