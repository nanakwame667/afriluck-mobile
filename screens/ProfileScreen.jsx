import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../components/CustomText";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ProfileData } from "../data/Profile";
const Item = ({ title, icon, navigate }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={styles.perItem}
        onPress={() => {
          if (navigate) {
            navigation.navigate(navigate);
          } else {
            console.warn("No route specified");
          }
        }}
      >
        <View style={styles.indicatorContainer}>
          <Image source={icon} />
        </View>
        <CustomText weight="medium" style={{ fontSize: 20 }}>
          {title}
        </CustomText>
        <Entypo name={"chevron-small-right"} size={30} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};
const ProfileScreen = () => {
  const renderHeader = () => (
    <View>
      <CustomText
        weight="medium"
        style={{
          fontSize: 24,
          color: colors.title,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        My Profile
      </CustomText>
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

  return (
    <View style={styles.container}>
      <FlatList
        data={ProfileData}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <Item title={item.title} icon={item.icon} navigate={item.navigate} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
  },
  profileContainer: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 500,
    marginBottom: 20,
  },
  indicatorContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#E2F7F8",
    borderRadius: 50,
  },
  list: {
    flex: 1,
  },
  item: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  perItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});
