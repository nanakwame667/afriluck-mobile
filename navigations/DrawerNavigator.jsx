import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import ResultsScreen from "../screens/ResultsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { TouchableOpacity, Image, View } from "react-native";
import { Badge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import colors from "../colors";
import logo from "../assets/images/logo.png";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Fonts } from "../theme";
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      style={{
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontFamily: Fonts.regular,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 40,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image source={logo} style={{ width: 150, height: 50 }} />
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <MaterialCommunityIcons name="close" color={colors.text} size={24} />
        </TouchableOpacity>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="rocket1" color={color} size={size} />
        )}
        label="Games"
        onPress={() => props.navigation.navigate("Games")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="barcode" color={color} size={size} />
        )}
        label="Scratch"
        onPress={() => props.navigation.navigate("Scratch")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="profile" color={color} size={size} />
        )}
        label="Results"
        onPress={() => props.navigation.navigate("Results")}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign name="user" color={color} size={size} />
        )}
        label="Profile"
        onPress={() => props.navigation.navigate("Profile")}
      />
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();
  const openDrawer = (navigation) => {
    navigation.dispatch({
      type: "OPEN_DRAWER",
    });
  };
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Afriluck"
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
