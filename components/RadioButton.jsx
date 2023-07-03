import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomText from "./CustomText";
import colors from "../colors";

const RadioButton = ({ content, selected, value, onChange }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "flex-start",
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        borderColor: selected ? colors.primary : "#DBDBDB",
        width: "100%",
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
        onPress={() => onChange(value)}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 30,
            height: 30,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: "#DBDBDB",
            backgroundColor: selected ? colors.primary : "white",
            marginRight: 10,
          }}
        >
          {selected && <FontAwesome name="check" size={14} color="white" />}
        </View>
        <CustomText>{content}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;
