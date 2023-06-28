import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity, Image } from "react-native";
import { Badge, Icon } from "react-native-elements";
import BottomTabNavigator from "./BottomTabNavigator";
import { useNavigation } from "@react-navigation/native";

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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={require("../assets/images/menu.png")} />
              {/* <Icon name="menu" size={25} /> */}
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <View>
                <Image source={require("../assets/images/bell.png")} />
                {/* <Icon name="notifications" size={25} /> */}
                <Badge
                  status="error"
                  containerStyle={{ position: "absolute", top: -4, right: -4 }}
                />
              </View>
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 30 },
          headerRightContainerStyle: { paddingRight: 30 },
          headerStyle: { backgroundColor: "transparent", height: 150 },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
