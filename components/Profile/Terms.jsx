import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TermsData } from "../../data/Terms";
import { FlatList } from "react-native-gesture-handler";
import CustomText from "../CustomText";
import colors from "../../colors";
import { Fonts } from "../../theme";

const Item = ({ title, description }) => {
  return (
    <View style={styles.item}>
      <View>
        <CustomText>{title}</CustomText>
      </View>
      <View>
        <CustomText>{description}</CustomText>
      </View>
    </View>
  );
};

const Terms = () => {
  const renderHeader = () => (
    <View>
      <CustomText
        weight="regular"
        style={{
          fontSize: 14,
          color: colors.primary,
          marginTop: 20,
          textAlign: "left",
          marginHorizontal: 30,
        }}
      >
        These Terms and Conditions of Use (“Terms”) govern your access and use
        of the betting platform (“Platform”) offered by Bettipster (“Company”).
        By accessing or using the Platform, you agree to be bound by these
        Terms. If you do not agree to these Terms, do not access or use the
        Platform.
      </CustomText>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={TermsData}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Terms;

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
    marginTop: 20,
    paddingVertical: 10,
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
