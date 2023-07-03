import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import RadioButton from "./RadioButton";
import InputField from "./InputField";
import CustomText from "./CustomText";
import hubtel from "./../assets/images/hubtel.png";
import Button from "./Button";
import colors from "../colors";

const PaymentComponent = ({
  gameType,
  coupon,
  setCoupon,
  paymentMethod,
  setPaymentMethod,
  baseAmount,
  numberOfTickets,
  isLoading,
  onPlay,
  canSubmit,
  isSingleGame,
  betAmount,
  incrementBetAmount,
  decrementBetAmount,
  totalAmount,
  onApplyCoupon,
  isApplyingCoupon,
}) => {
  const couponChange = (value) => {
    setCoupon(value);
  };

  const total = Number(baseAmount) * numberOfTickets;

  return (
    <View style={styles.container}>
      <View style={styles.couponContainer}>
        <View style={{ flex: 1 }}>
          <InputField
            placeholder="Enter Coupon Code"
            fieldType="text"
            value={coupon}
            onChangeText={setCoupon}
          />
        </View>
        <View style={{ paddingLeft: 10, marginBottom: 20 }}>
          <Button title={"Apply"} onPress={onApplyCoupon} />
        </View>
      </View>
      <ScrollView style={styles.paymentContainer}>
        <View style={styles.radioContainer}>
          <RadioButton
            content="Use wallet amount"
            selected={paymentMethod === "wallet"}
            value="wallet"
            onChange={(value) => setPaymentMethod(value)}
          />
          <RadioButton
            content={<Image source={hubtel} />}
            selected={paymentMethod === "hubtel"}
            value="hubtel"
            onChange={(value) => setPaymentMethod(value)}
          />
        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <CustomText>Total Stake</CustomText>
            <CustomText
              weight="medium"
              style={{ paddingRight: 20, fontSize: 18 }}
            >
              ȼ{numberOfTickets}.00
            </CustomText>
          </View>

          <View style={styles.summaryItem}>
            <CustomText>Base Amount</CustomText>
            {isSingleGame ? (
              <CustomText>{betAmount}</CustomText>
            ) : (
              <View style={styles.betAmountContainer}>
                <TouchableOpacity
                  style={
                    betAmount == baseAmount
                      ? styles.disabledButton
                      : styles.minus
                  }
                  onPress={() =>
                    betAmount != baseAmount && decrementBetAmount()
                  }
                  disabled={betAmount == baseAmount}
                >
                  <CustomText
                    style={{
                      color: colors.title,
                      fontSize: 30,
                      paddingRight: 20,
                    }}
                  >
                    -
                  </CustomText>
                </TouchableOpacity>
                <CustomText style={{ fontSize: 20 }}>{betAmount}</CustomText>
                <TouchableOpacity
                  style={styles.add}
                  onPress={incrementBetAmount}
                >
                  <CustomText
                    style={{
                      color: colors.title,
                      fontSize: 30,
                      paddingLeft: 20,
                    }}
                  >
                    +
                  </CustomText>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.summaryTotal}>
            <CustomText
              weight="semibold"
              style={{ color: colors.primary, fontSize: 18 }}
            >
              Total
            </CustomText>
            <CustomText style={{ fontSize: 20, color: colors.primary }}>
              ȼ {totalAmount}.00
            </CustomText>
          </View>
        </View>
      </ScrollView>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.playLaterButton]}
          onPress={onPlay}
          disabled={!canSubmit || isLoading}
        >
          <CustomText weight="semibold" style={{ color: colors.secondary }}>
            Play Later
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isLoading && styles.loadingButton]}
          onPress={onPlay}
          disabled={!canSubmit || isLoading}
        >
          <CustomText style={styles.buttonText}>Play</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  couponContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  couponInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: 50,
    borderRadius: 8,
    height: 50,
  },
  loadingButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  paymentContainer: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
  },
  radioContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 5,
    width: "100%",
  },
  summaryContainer: {
    flex: 1,
    width: "100%",
  },
  summaryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
    paddingLeft: 20,
    height: 50,
  },
  summaryTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E2F7F8",
    borderRadius: 5,
    marginBottom: 10,
    height: 50,
  },
  betAmountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonsContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
    width: "100%",
  },
  playLaterButton: {
    backgroundColor: "#FDDBC9",
  },
  disabledButton: {
    backgroundColor: "gray",
  },
});
