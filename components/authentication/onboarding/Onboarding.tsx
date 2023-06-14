import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
  ViewToken,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import colors from "../../../colors";
import { SlidesData } from "../../../data/slides";
import OnboardingItem from "./OnboardingItem";
import NextButton from "./NextButton";

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList>(null);

  const scrollTop = useCallback(() => {
    if (slideRef.current && currentIndex < SlidesData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last slide");
    }
  }, [currentIndex]);

  const scrollBack = useCallback(() => {
    if (slideRef.current && currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("First slide");
    }
  }, [currentIndex]);

  const skipToLast = useCallback(() => {
    slideRef.current?.scrollToEnd();
  }, []);

  const viewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index || 0);
    },
    []
  );

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <SafeAreaView style={styles.container}>
      {currentIndex === 1 && (
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={scrollBack}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToLast}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.slider}>
        <FlatList
          data={SlidesData}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig.current}
          scrollEventThrottle={32}
          ref={slideRef}
        />
      </View>
      <NextButton
        scrollTo={scrollTop}
        percentage={(currentIndex + 1) * (100 / SlidesData.length)}
        currentIndex={currentIndex}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    position: "absolute",
    top: 68,
    zIndex: 1,
  },
  slider: {
    flex: 3,
  },
  skipText: {
    fontSize: 16,
    color: colors.text,
  },
});

export default Onboarding;
