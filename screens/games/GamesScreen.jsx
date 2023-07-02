import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CustomText from "../../components/CustomText";
import colors from "../../colors";
import { Fonts } from "../../theme";
import { GamesData } from "../../data/Games";
import { CarouselData } from "../../data/Carousel";
import { useNavigation } from "@react-navigation/native";

const Item = ({ title, subtitle, image }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.item}>
      <View style={styles.backgroundContainer}>
        <ImageBackground source={image} style={styles.background}>
          <View style={styles.titleContainer}>
            <CustomText style={styles.titleText} weight="semibold">
              {title}
            </CustomText>
          </View>
          <View>
            <CustomText
              weight="medium"
              style={{ fontSize: 16, color: colors.background, paddingTop: 10 }}
            >
              {subtitle}
            </CustomText>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Drawer", {
                  screen: "Tab",
                  params: {
                    screen: "Results",
                    params: {
                      screen: "Results1",
                    },
                  },
                })
              }
              style={styles.btn}
            >
              <CustomText weight="semibold" style={{ color: colors.primary }}>
                CHECK LOTTO
              </CustomText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const Game = ({ title, amount, button, image, btnColor }) => {
  return (
    <View style={styles.game}>
      <View style={styles.backgroundContainer1}>
        <ImageBackground source={image} style={styles.background1}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingVertical: 10,
              width: "100%",
            }}
          >
            <CustomText
              weight="semibold"
              style={{ color: colors.background, fontSize: 15 }}
            >
              Mega Jackpot
            </CustomText>
            <View
              style={{
                width: 120,
                height: 2,
                marginLeft: 20,
                backgroundColor: colors.background,
              }}
            ></View>
          </View>
          <View style={{ paddingVertical: 10, width: "100%" }}>
            <CustomText
              weight="bold"
              style={{
                color: colors.background,
                fontSize: 18,
                flexWrap: "wrap",
              }}
            >
              {title}
            </CustomText>
          </View>
          <View style={{ paddingVertical: 10, width: "100%" }}>
            <CustomText
              weight="extrabold"
              style={{
                color: colors.background,
                fontSize: 26,
                flexWrap: "wrap",
              }}
            >
              {amount}
            </CustomText>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Drawer", {
                  screen: "Tab",
                  params: {
                    screen: "Results",
                    params: {
                      screen: "Results1",
                    },
                  },
                })
              }
              style={[styles.btn1, { backgroundColor: btnColor }]}
            >
              <CustomText
                weight="semibold"
                style={{ color: colors.background }}
              >
                {button}
              </CustomText>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const GamesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingVertical: 20 }}>
        <CustomText
          weight="medium"
          style={{ fontSize: 20, paddingHorizontal: 30 }}
        >
          OUR GAMES
        </CustomText>
      </View>
      <View style={{ flex: 0.8 }}>
        <FlatList
          data={CarouselData}
          horizontal
          pagingEnabled
          ListEmptyComponent={<Text>No data!</Text>}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <ScrollView style={{ flex: 0.5 }} showsVerticalScrollIndicator={false}>
        <View style={{ paddingVertical: 20 }}>
          <CustomText
            weight="medium"
            style={{ fontSize: 20, paddingHorizontal: 30 }}
          >
            MORE GAMES
          </CustomText>
        </View>
        <View style={{ flex: 0.5 }}>
          <FlatList
            data={GamesData}
            horizontal
            pagingEnabled
            ListEmptyComponent={<Text>No data!</Text>}
            renderItem={({ item }) => (
              <Game
                title={item.title}
                amount={item.amount}
                button={item.button}
                btnColor={item.btnColor}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{ paddingVertical: 20 }}>
          <CustomText
            weight="medium"
            style={{ fontSize: 20, paddingHorizontal: 30 }}
          >
            INSTANT GAMES
          </CustomText>
        </View>
        <View style={{ flex: 0.5 }}>
          <FlatList
            data={GamesData}
            horizontal
            pagingEnabled
            ListEmptyComponent={<Text>No data!</Text>}
            renderItem={({ item }) => (
              <Game
                title={item.title}
                amount={item.amount}
                button={item.button}
                btnColor={item.btnColor}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default GamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
  },
  backgroundContainer: {
    borderRadius: 20,
    overflow: "hidden",
    height: 200, // <-- add a height here
    width: "100%", // <-- add a width here
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    height: "100%", // <-- make this 100%
    width: 290, // <-- make this 100%
  },
  backgroundContainer1: {
    borderRadius: 20,
    overflow: "hidden",
    height: 220, // <-- add a height here
    width: "100%", // <-- add a width here
  },
  background1: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    height: "100%", // <-- make this 100%
    width: 290, // <-- make this 100%
  },
  item: {
    flex: 1,
    marginRight: 10, // Add this line to add a 10 pixel gap between items
    width: "100%",
    flexDirection: "row",
    paddingLeft: 30,
  },
  titleContainer: {
    paddingTop: 20,
    width: "90%", // add a width limit
  },
  titleText: {
    fontSize: 22,
    color: colors.background,
    flexWrap: "wrap",
  },
  btn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
  btn1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 20,
    marginVertical: 15,
    width: "100%",
  },
  game: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingLeft: 25,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
