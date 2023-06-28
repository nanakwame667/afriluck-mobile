import { StyleSheet } from "react-native";
import colors from "../colors";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Gotham",
    fontWeight: "bold",
    color: colors.heading,
  },
});

export default globalStyles;
