import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  useWindowDimensions,
} from "react-native";
import colors from "../colors";
import { Fonts } from "../theme";

const Button = ({
  title,
  onPress,
  color = colors.primary,
  textColor = "#FFFFFF",
}) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: color }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 65,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: Fonts.medium,
  },
});

export default Button;
