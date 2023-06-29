import { createDrawerNavigator } from "@react-navigation/drawer";
import ResultsScreen from "../screens/ResultsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { TouchableOpacity, Image, View } from "react-native";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const openDrawer = (navigation) => {
    navigation.dispatch({
      type: "OPEN_DRAWER",
    });
  };
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Tab"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => openDrawer(navigation)}>
              <Image source={require("../assets/images/menu.png")} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <View style={{ marginRight: 10 }}>
                <Image source={require("../assets/images/bell.png")} />
                <Badge
                  status="error"
                  containerStyle={{
                    position: "absolute",
                    top: -3,
                    right: -2,
                  }}
                  badgeStyle={{ width: 10, height: 10, borderRadius: 10 }}
                  size="large"
                />
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 30 },
          headerRightContainerStyle: { paddingRight: 30 },
          headerStyle: { backgroundColor: colors.background, height: 120 },
        })}
      />
      <Drawer.Screen name="Games" component={GamesScreen} />
      <Drawer.Screen name="Scratch" component={ScratchCardScreen} />
      <Drawer.Screen name="Results" component={ResultsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
