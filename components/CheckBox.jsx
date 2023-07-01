import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../colors";
import { Fonts } from "../theme";

const CheckBox = ({ label, isChecked = false, onCheckChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handlePress = () => {
    setChecked(!checked);
    onCheckChange && onCheckChange(!checked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <FontAwesome name="check" size={15} color="white" />}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: colors.space,
    borderRadius: 6,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  checked: {
    backgroundColor: colors.primary,
  },
  labelContainer: {
    flexShrink: 1,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    flexWrap: "wrap",
  },
});

export default CheckBox;
