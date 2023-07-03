import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../../../colors";
import CustomText from "../../../components/CustomText";
import { Fonts } from "../../../theme";
import PickNumberSelector from "../../../components/PickNumberSelector";
import Button from "../../../components/Button";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NumberPick = () => {
  const navigation = useNavigation();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [activeSelector, setActiveSelector] = useState(1);
  const numberOfPick = { value: 6 };
  const isValid = true;
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
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Entypo name={"chevron-small-left"} size={40} color={colors.text} />
        </TouchableOpacity>
        <CustomText
          weight="semibold"
          style={{ fontSize: 18, color: colors.primary, paddingHorizontal: 40 }}
        >
          Pick Your Numbers
        </CustomText>
      </View>
      <View style={{ flex: 0.9 }}>
        <PickNumberSelector
          selectorId={1}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
          numberOfPick={numberOfPick}
          activeSelector={activeSelector}
          setActiveSelector={setActiveSelector}
          isValid={isValid}
        />
      </View>
      <View style={{ flex: 0.2 }}>
        <Button
          title={"Continue"}
          onPress={() => navigation.navigate("Payment")}
        />
      </View>
    </SafeAreaView>
  );
};

export default NumberPick;

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
