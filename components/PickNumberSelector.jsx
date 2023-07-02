import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import NumberSelect from "./NumberSelect";
import Button from "./Button";
import PositionStatus from "./PositionStatus";
import broom from "../assets/images/broom.png";
import { NumberData } from "../data/NumberData";

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
    <View style={{ flex: 1, padding: 3, alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => {
          setActiveSelector(activeSelector == selectorId ? -1 : selectorId);
        }}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#BCBCBC" }}>
          <PositionStatus
            isCurrent={activeSelector == selectorId}
            position={selectorId + 1}
          />
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {Array.from({ length: numberOfPick.value }).map((_, index) => (
            <NumberSelect
              id={`picked-${index}${selectorId}`}
              checked={!!selectedNumbers[index]}
              onChange={() => {
                return false;
              }}
              type="checkbox"
              size={"small"}
              number={selectedNumbers[index]}
            />
          ))}
        </View>
        <Text style={{ fontWeight: "bold", color: counter > 0 ? "gray" : "" }}>
          {counter}/{numberOfPick.value}
        </Text>
      </TouchableOpacity>
      {activeSelector == selectorId && (
        <React.Fragment>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              padding: 8,
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
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: 24,
            }}
          >
            <TouchableOpacity
              onPress={clearSelections}
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 4,
                borderBottomWidth: 2,
                borderBottomColor: "#FDDBC9",
                cursor: "pointer",
              }}
            >
              <Image source={broom} style={{ width: 24 }} />
              <Text
                style={{ fontSize: 18, fontWeight: "normal", color: "#FDDBC9" }}
              >
                Clear All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={autoFill}
              style={{
                padding: 8,
                backgroundColor: "#FDDBC9",
                opacity: 0.6,
                color: "#FDDBC9",
                hoverBackgroundColor: "#FDDBC9",
              }}
            >
              <Text>AutoFill</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

export default PickNumberSelector;
