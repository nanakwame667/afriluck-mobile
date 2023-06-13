import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  useWindowDimensions,
} from "react-native";
import colors from "../colors";

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  color?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = colors.primary,
  textColor = "#FFFFFF",
}) => {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color },
        { width: width * 0.9 },
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
  },
});

export default Button;
