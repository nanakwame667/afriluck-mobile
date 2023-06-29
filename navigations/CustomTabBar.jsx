import * as React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";
import { Fonts } from "../theme";

export const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconName = options.tabBarIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[
              styles.tab,
              isFocused ? styles.tabActive : styles.tabInactive,
            ]}
          >
            <AntDesign
              name={iconName}
              size={26}
              style={styles.icon} // Added style
              color={isFocused ? colors.primary : colors.text}
            />
            <Text style={styles.label(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: "row",
    marginHorizontal: 16,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  tabActive: {
    borderTopWidth: 3,
    borderTopColor: colors.tetiary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  tabInactive: {
    borderTopWidth: 0,
    borderTopColor: "transparent",
  },
  label: (isFocused) => ({
    color: isFocused ? colors.primary : "#222",
    fontFamily: Fonts.regular,
    fontSize: 14,
  }),
  icon: {
    // New style for the icon
    marginBottom: 5, // This creates space between the icon and the label
    paddingBottom: 5, // This moves the icon closer to the border
  },
});
