import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import NumberSelect from "./NumberSelect";
import Button from "./Button";
import PositionStatus from "./PositionStatus";
import broom from "../assets/images/broom.png";
import { NumberData } from "../data/NumberData";
import colors from "../colors";
import CustomText from "./CustomText";

const PickNumberSelector = (props) => {
  const {
    selectorId,
    selectedNumbers = [],
    setSelectedNumbers,
    numberOfPick,
    activeSelector,
    setActiveSelector,
    isValid,
  } = props;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
  }, [numberOfPick.value]);

  const handleCheckboxChange = (value) => {
    if (selectedNumbers.includes(value)) {
      setSelectedNumbers(selectedNumbers.filter((number) => number !== value));
      setCounter(counter - 1);
    } else {
      if (counter < numberOfPick.value) {
        setSelectedNumbers([...selectedNumbers, value]);
        setCounter(counter + 1);
      }
    }
  };

  const clearSelections = () => {
    setSelectedNumbers([]);
    setCounter(0);
  };

  const autoFill = () => {
    const getRandomNumbers = (count) => {
      const selected = [];
      while (selected.length < count) {
        const randIndex = Math.floor(Math.random() * NumberData.length);
        const randNumber = NumberData[randIndex].value;
        if (!selected.includes(randNumber)) {
          selected.push(randNumber);
        }
      }
      return selected;
    };

    const randomNumbers = getRandomNumbers(numberOfPick.value);
    setSelectedNumbers(randomNumbers);
    setCounter(numberOfPick.value);
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingVertical: 30,
        }}
      >
        <CustomText
          weight="medium"
          style={{ fontWeight: "bold", color: colors.title }}
        >
          Numbers
        </CustomText>
        <CustomText
          weight="semibold"
          style={{ color: counter > 0 ? colors.primary : colors.text }}
        >
          {counter}/{numberOfPick.value}
        </CustomText>
      </View>

      {activeSelector == selectorId && (
        <ScrollView showsVerticalScrollIndicator={true} style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "flex-start",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {NumberData.map(({ id, value }) => (
              <NumberSelect
                id={`${id}${selectorId}`}
                checked={selectedNumbers.includes(value)}
                onChange={() => handleCheckboxChange(value)}
                type="checkbox"
                size={"small"}
                disabled={
                  !selectedNumbers.includes(value) &&
                  selectedNumbers.length == numberOfPick.value
                }
                number={value}
              />
            ))}
          </View>
        </ScrollView>
      )}
      <View
        style={{
          flex: 0.3,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={clearSelections}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 4,
            borderBottomWidth: 2,
            borderBottomColor: colors.primary,
            cursor: "pointer",
            height: 50,
            paddingVertical: 5,
            marginHorizontal: 15,
          }}
        >
          <Image source={broom} />
          <CustomText
            style={{
              fontSize: 16,
              fontWeight: "normal",
              color: colors.primary,
              paddingLeft: 10,
            }}
          >
            Clear All
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={autoFill}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 40,
            backgroundColor: "#FDDBC9",
            opacity: 0.6,
            color: "#FDDBC9",
            hoverBackgroundColor: "#FDDBC9",
            height: 50,
            borderRadius: 10,
          }}
        >
          <CustomText
            weight="semibold"
            style={{
              fontSize: 16,
              color: colors.secondary,
            }}
          >
            AutoFill
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PickNumberSelector;
