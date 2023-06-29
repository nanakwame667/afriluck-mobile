import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import colors from "../colors";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText
          weight="medium"
          style={{ fontSize: 24, color: colors.title }}
        >
          My Profile
        </CustomText>
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profile}
          source={require("../assets/images/avatar.png")}
        />

        <CustomText
          weight="medium"
          style={{ fontSize: 20, color: colors.title }}
        >
          Kwame Frimpong
        </CustomText>
        <CustomText
          weight="regular"
          style={{ fontSize: 18, color: colors.space, paddingVertical: 5 }}
        >
          +233 5545 88 483
        </CustomText>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
  },
  profileContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 500,
    marginBottom: 20,
  },
});
