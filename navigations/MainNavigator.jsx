import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Image } from "react-native";
import { Badge } from "react-native-elements";
import BottomTabNavigator from "./BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={BottomTabNavigator}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image source={require("../assets/images/menu.png")} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <View>
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
          headerStyle: { backgroundColor: "transparent", height: 150 },
        }}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
