import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../colors";
import CustomText from "../../../components/CustomText";
import { Fonts } from "../../../theme";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import CustomDropDown from "../../../components/InputDropdown";
import NumberSelect from "../../../components/NumberSelect";

const SingleGame = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const numbers = [1, 2, 3, 4, 5]; // add as many numbers as you like

  const handleNumberSelect = (id) => {
    setSelectedNumber(id);
  };
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedValue1, setSelectedValue1] = useState(null);

  const items = [
    { label: "Classic", value: "Classic" },
    { label: "Others", value: "Others" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomText
          weight="semibold"
          style={{ fontSize: 20, paddingVertical: 20 }}
        >
          BIG WIN JACKPOT
        </CustomText>
      </View>
      <View style={styles.bodyText}>
        <CustomText
          weight="semibold"
          style={{ fontSize: 20, color: colors.background }}
        >
          70 MILLION MEGA JACKPOT
        </CustomText>
      </View>
      <View style={{ flex: 0.8 }}>
        <CustomText
          weight="medium"
          style={{ color: colors.primary, fontSize: 15 }}
        >
          Select Number of Tickets
        </CustomText>
        <View style={styles.numberContainer}>
          {numbers.map((num) => (
            <NumberSelect
              key={num}
              id={num}
              checked={selectedNumber === num}
              onChange={() => handleNumberSelect(num)}
              number={num}
            />
          ))}
        </View>
      </View>
      <ScrollView style={{ flex: 0.6 }} showsVerticalScrollIndicator={true}>
        <View style={styles.dropdown}>
          <CustomDropDown
            items={items}
            onValueChange={setSelectedValue}
            placeholder="Select Type"
            label={"Select Multiple"}
          />
        </View>
        <View style={styles.dropdown}>
          <CustomDropDown
            items={items}
            onValueChange={setSelectedValue1}
            placeholder="Select Type"
            label={"Select Number of MultiDraws"}
          />
        </View>
      </ScrollView>
      <View>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("NumberPick")}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.background,
    paddingHorizontal: 30,
  },
  bodyText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 80,
    marginVertical: 20,
  },
  dropdown: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
    marginVertical: 20,
  },
  numberContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
});
