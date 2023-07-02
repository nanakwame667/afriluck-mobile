import React from "react";
import { View, Text } from "react-native";

function PositionStatus(props) {
  const { isCurrent, position } = props;

  return (
    <View>
      {isCurrent ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "#FDDBC9",
          }}
        >
          <Text style={{ color: "#FDDBC9" }}>0{position}</Text>
        </View>
      ) : (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 40,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: "gray",
          }}
        >
          <Text style={{ color: "gray" }}>{position}</Text>
        </View>
      )}
    </View>
  );
}

export default PositionStatus;
