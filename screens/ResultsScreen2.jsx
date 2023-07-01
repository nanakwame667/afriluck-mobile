import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import colors from "../colors";
import { Fonts } from "../theme";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ResultsData } from "../data/Results";

const Item = ({ draw, first, second, third, fourth, fifth, sixth }) => {
  return (
    <View style={styles.item}>
      <View style={styles.perItem}>
        <View style={{ paddingVertical: 10 }}>
          <CustomText style={{ color: colors.accent }} weight="medium">
            Draw Number
          </CustomText>
          <CustomText
            weight="medium"
            style={{ fontSize: 30, color: colors.title }}
          >
            {draw}
          </CustomText>
        </View>
        <View>
          <CustomText style={{ fontSize: 16, color: colors.text }}>
            First Main Number
          </CustomText>
          <CustomText weight="medium" style={{ fontSize: 28 }}>
            {first}
          </CustomText>
        </View>
        <View>
          <CustomText style={{ fontSize: 16, color: colors.text }}>
            Main Numbers
          </CustomText>
          <View style={{ flexDirection: "row", width: "100%" }}>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {first}
            </CustomText>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {second}
            </CustomText>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {third}
            </CustomText>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {fourth}
            </CustomText>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {fifth}
            </CustomText>
            <CustomText
              weight="medium"
              style={{
                fontSize: 24,
                paddingRight: 15,
                paddingTop: 8,
                color: colors.accentDeep,
              }}
            >
              {sixth}
            </CustomText>
          </View>
        </View>
        <View style={{ paddingVertical: 15, flexDirection: "row" }}>
          <CustomText style={{ fontSize: 22 }}>Payout Details</CustomText>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.secondary,
              paddingHorizontal: 6,
              paddingVertical: 6,
              marginLeft: 20,
              borderRadius: 6,
            }}
          >
            <CustomText style={{ color: colors.background }}>
              Details
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const ResultsScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomText
        weight="medium"
        style={{ fontSize: 24, color: colors.title, paddingVertical: 20 }}
      >
        GAMES RESULTS
      </CustomText>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name={"chevron-small-left"} size={40} color={colors.text} />
      </TouchableOpacity>
      <FlatList
        data={ResultsData}
        renderItem={({ item }) => (
          <Item
            draw={item.draw}
            first={item.first}
            second={item.second}
            third={item.third}
            fourth={item.fourth}
            fifth={item.fifth}
            sixth={item.sixth}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ResultsScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    paddingHorizontal: 30,
  },
  item: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  perItem: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    rowGap: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 350,
  },
});
