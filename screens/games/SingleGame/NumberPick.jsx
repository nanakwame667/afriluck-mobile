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
import PickNumberSelector from "../../../components/PickNumberSelector";

const NumberPick = () => {
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
      <View style={{ flex: 1 }}>
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
