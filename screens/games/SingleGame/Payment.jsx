import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import colors from "../../../colors";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import PaymentComponent from "../../../components/PaymentComponent";

const Payment = () => {
  const navigation = useNavigation();
  // Define any required states for PaymentComponent
  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(true);
  const [isSingleGame, setIsSingleGame] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);

  // Dummy functions for handling events
  const incrementBetAmount = () => setBetAmount(betAmount + 1);
  const decrementBetAmount = () => setBetAmount(betAmount - 1);
  const onApplyCoupon = () => {
    setIsApplyingCoupon(true);
    setTimeout(() => setIsApplyingCoupon(false), 2000);
  };
  const onPlay = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

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
      </View>
      <PaymentComponent
        gameType="Jackpot"
        coupon={coupon}
        setCoupon={setCoupon}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        baseAmount="100"
        numberOfTickets={1}
        isLoading={isLoading}
        onPlay={onPlay}
        canSubmit={canSubmit}
        isSingleGame={isSingleGame}
        betAmount={betAmount}
        incrementBetAmount={incrementBetAmount}
        decrementBetAmount={decrementBetAmount}
        totalAmount={betAmount}
        onApplyCoupon={onApplyCoupon}
        isApplyingCoupon={isApplyingCoupon}
      />
    </SafeAreaView>
  );
};

export default Payment;

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
