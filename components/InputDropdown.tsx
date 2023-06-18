import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface DropdownProps {
  label: string;
  options: string[];
  onOptionSelected: (option: string) => void;
  id: string;
  header?: string;
  fontSize?: number;
  color?: string;
  fontWeight?: FontWeight;
  error?: boolean;
}

const InputDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onOptionSelected,
  id,
  header,
  fontSize,
  color,
  fontWeight,
  error,
}) => {
  const [selectedOption, setSelectedOption] = useState(label);

  const handleOptionSelected = (option: string) => {
    setSelectedOption(option);
    onOptionSelected(option);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: fontSize,
          color: color,
          fontWeight: fontWeight,
        }}
      >
        {header}
      </Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={handleOptionSelected}
        style={error ? styles.error : styles.picker}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
  },
  error: {
    height: 50,
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
  },
});

export default InputDropdown;
