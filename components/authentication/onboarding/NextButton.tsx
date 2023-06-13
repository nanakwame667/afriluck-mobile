import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { G, Circle } from "react-native-svg";
import colors from "../../../colors";
import { AntDesign } from "@expo/vector-icons";
import { SlidesData } from "../../../data/slides";
import Button from "../../button";

interface NextButtonProps {
  percentage: number;
  scrollTo: () => void;
  currentIndex: number;
  navigation: any;
}

const NextButton: React.FC<NextButtonProps> = ({
  percentage,
  scrollTo,
  currentIndex,
  navigation,
}) => {
  const size = 100;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<any>(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, [circumference, progressAnimation]);
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <View style={styles.container}>
      {currentIndex < SlidesData.length - 1 && (
        <Svg width={size} height={size}>
          <G rotation="-90" origin={center}>
            <Circle
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={colors.space}
            />
            <Circle
              ref={progressRef}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              stroke={colors.primary}
              strokeDasharray={[circumference]}
            />
          </G>
        </Svg>
      )}
      {currentIndex === SlidesData.length - 1 ? (
        <Button title="Get Started" onPress={navigateToSignUp} />
      ) : (
        <TouchableOpacity
          onPress={scrollTo}
          activeOpacity={0.6}
          style={styles.button}
        >
          <AntDesign name="arrowright" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: colors.primary,
    borderRadius: 100,
    padding: 20,
  },
});
