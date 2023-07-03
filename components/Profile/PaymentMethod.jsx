import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import visa from "../../assets/images/Visa.png";
import mastercard from "../../assets/images/Mastercard.png";
import colors from "../../colors";
import CustomText from "../CustomText";
import Button from "../Button";
import InputField from "../InputField";
import CustomDropDown from "../InputDropdown";
import mtn from "../../assets/images/mtn.png";
import vodafone from "../../assets/images/vodafone.png";
import airtel from "../../assets/images/airtel.png";

const PaymentMethod = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedValue1, setSelectedValue1] = useState(null);

  const items1 = [
    { label: "MTN", value: "MTN" },
    { label: "Vodafone", value: "Vodafone" },
    { label: "AirtelTigo", value: "AirtelTigo" },
  ];

  const handleCardNumberChange = (text) => {
    // Allow only digits, spaces, and dashes, up to 19 characters
    if (/^[0-9 -]{0,19}$/.test(text)) {
      setCardNumber(text);
    }
  };

  const handleExpiryDateChange = (text) => {
    // Allow only digits and "/", up to 5 characters (MM/YY format)
    if (/^[0-9/]{0,5}$/.test(text)) {
      setExpiryDate(text);
    }
  };

  const handleCvcChange = (text) => {
    // Allow only digits, up to 3 characters
    if (/^[0-9]{0,3}$/.test(text)) {
      setCvc(text);
    }
  };

  const renderInputFields = () => {
    if (selectedOption === "Card") {
      return (
        <View>
          <InputField
            placeholder="Provide your card number"
            fieldType="text"
            label="Card Number"
            value={cardNumber}
            onChangeText={handleCardNumberChange}
            style={styles.input}
          />
          <InputField
            placeholder="MM/YY"
            fieldType="text"
            label="Expiry Date (MM/YY)"
            value={expiryDate}
            onChangeText={handleExpiryDateChange}
            style={styles.input}
          />
          <InputField
            fieldType="text"
            label="CVC"
            value={cvc}
            onChangeText={handleCvcChange}
            style={styles.input}
          />
        </View>
      );
    } else if (selectedOption === "Mobile") {
      return (
        <View style={{ zIndex: 1000, paddingVertical: 20 }}>
          <View style={styles.dropdown}>
            <CustomDropDown
              items={items1}
              onValueChange={setSelectedValue1}
              placeholder="Select Type"
              label={"Mobile Network"}
              labelStyle={{ fontSize: 14, color: colors.title }}
            />
          </View>
          <InputField
            fieldType="phoneNumber"
            label="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            style={styles.input}
          />
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.8 }}>
        <CustomText weight="medium" style={styles.title}>
          Choose Your Payment Method
        </CustomText>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => {
            setSelectedOption((prevOption) =>
              prevOption === "Card" ? "" : "Card"
            );
          }}
        >
          <View style={styles.option}>
            <Image source={visa} style={{ marginRight: 5 }} />
            <Image source={mastercard} style={{ marginRight: 10 }} />
            <CustomText
              style={[
                styles.optionText,
                selectedOption === "Card" && styles.selectedOptionText,
              ]}
            >
              Bank Card
            </CustomText>
          </View>
          {selectedOption === "Card" && (
            <CustomText style={styles.selectedOptionIndicator}>
              Selected
            </CustomText>
          )}
        </TouchableOpacity>
        {selectedOption === "Card" && renderInputFields()}

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => {
            setSelectedOption((prevOption) =>
              prevOption === "Mobile" ? "" : "Mobile"
            );
          }}
        >
          <View style={styles.option}>
            <Image source={mtn} style={{ marginRight: 2 }} />
            <Image source={airtel} style={{ marginRight: 2 }} />
            <Image source={vodafone} style={{ marginRight: 15 }} />
            <CustomText
              style={[
                styles.optionText,
                selectedOption === "Mobile" && styles.selectedOptionText,
              ]}
            >
              Mobile Money
            </CustomText>
          </View>
          {selectedOption === "Mobile" && (
            <CustomText style={styles.selectedOptionIndicator}>
              Selected
            </CustomText>
          )}
        </TouchableOpacity>
        {selectedOption === "Mobile" && renderInputFields()}
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          title={"Add Payment"}
          onPress={() => Alert.alert("Payment Added Successfully")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 15,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    color: "#333",
  },
  selectedOptionText: {
    color: "#007AFF",
  },
  selectedOptionIndicator: {
    color: "#007AFF",
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    elevation: 1000,
  },
});

export default PaymentMethod;
