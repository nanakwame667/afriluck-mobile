import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  Animated,
  ViewToken,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import colors from "../../../colors";
import { SlidesData } from "../../../data/slides";
import OnboardingItem from "./OnboardingItem";
import NextButton from "./NextButton";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // You can use any icon library

const One = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList | null>(null);
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0].index || 0);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTop = () => {
    if (slideRef.current && currentIndex < SlidesData.length - 1) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last slide");
    }
  };

  const scrollBack = () => {
    if (slideRef.current && currentIndex > 0) {
      slideRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else {
      console.log("First slide");
    }
  };

  const skipToLast = () => {
    if (slideRef.current) {
      slideRef.current.scrollToEnd();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentIndex === 1 && (
        <View style={styles.topButtons}>
          <TouchableOpacity onPress={scrollBack}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipToLast}>
            <Text>Skip</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ flex: 3 }}>
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
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
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

export default One;

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
});
