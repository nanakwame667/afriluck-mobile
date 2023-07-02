import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../colors";
import { Fonts } from "../theme";

const NumberSelect = ({
  id,
  type,
  checked,
  onChange, // No default function assigned
  number,
  disabled = false,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      opacity: disabled ? 0.5 : 1,
    },
    inputContainer: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: checked ? colors.primary : colors.primary,
      backgroundColor: checked ? colors.primary : colors.background,
      height: 55,
      width: 55,
      alignItems: "center",
      justifyContent: "center",
    },
    inputText: {
      fontSize: 20,
      color: checked ? "white" : colors.primary,
      fontFamily: Fonts.medium,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => !disabled && onChange(number)} // Now, it's passing number
      >
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{number}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NumberSelect;
