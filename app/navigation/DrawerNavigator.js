import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import ActivityScreen from "../screens/ActivityScreen";
import SettingScreen from "../screens/SettingScreen";
import AboutScreen from "../screens/AboutScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      independent={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          width: "50%", // Set width to 40% of the screen
          height: "100%", // Full screen height
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Activity" component={ActivityScreen} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
