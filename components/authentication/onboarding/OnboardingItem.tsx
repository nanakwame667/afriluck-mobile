import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import colors from "../../../colors";
import { Fonts } from "../../../theme";
// Define an interface for the item object
interface Item {
  id: string;
  title: string;
  description: string;
  image: any;
  button?: string;
}

// Use the Item interface to annotate the item prop
const OnboardingItem: React.FC<{ item: Item }> = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width: width * 0.8, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.2, marginLeft: 10, marginRight: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: Fonts.bold,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    color: colors.heading,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: Fonts.semibold,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    textAlign: "center",
    marginTop: 15,
    fontFamily: Fonts.regular,
  },
});
