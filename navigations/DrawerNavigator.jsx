import { createDrawerNavigator } from "@react-navigation/drawer";
import ResultsScreen from "../screens/ResultsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GamesScreen from "../screens/games/GamesScreen";
import ScratchCardScreen from "../screens/games/ScratchCardScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Games" component={GamesScreen} />
      <Drawer.Screen name="Scratch" component={ScratchCardScreen} />
      <Drawer.Screen name="Results" component={ResultsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
