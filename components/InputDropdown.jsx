import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, View } from "react-native";
import CustomText from "./CustomText";
import colors from "../colors";

function CustomDropDown({
  items,
  onValueChange,
  placeholder,
  style,
  label,
  labelStyle,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleChange = (val) => {
    setValue(val);
    onValueChange(val);
  };

  return (
    <View>
      <CustomText
        style={[{ fontSize: 16, color: colors.primary }, labelStyle]}
        weight="medium"
      >
        {label}
      </CustomText>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={handleChange}
        placeholder={placeholder}
        style={[styles.dropdown, style]}
        listItemContainerStyle={styles.listItemContainer}
        dropDownContainerStyle={styles.dropDownContainer}
        containerStyle={{ zIndex: 1000 }}
      />
    </View>
  );
}

export default CustomDropDown;

const styles = StyleSheet.create({
  dropdown: {
    borderColor: colors.space,
    height: 64,
    borderRadius: 10,
    marginVertical: 15,
    zIndex: 1000,
  },
  listItemContainer: {
    height: 70,
    borderColor: colors.space,
    borderWidth: 0.2,
    zIndex: 1000,
  },
  dropDownContainer: {
    borderColor: colors.space,
    borderWidth: 0.2,
    marginTop: 30,
    borderRadius: 10,
    zIndex: 1000,
  },
});
