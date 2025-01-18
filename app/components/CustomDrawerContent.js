import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { RFPercentage } from "react-native-responsive-fontsize";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const CustomDrawerContent = (props) => {
  return (
    // <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
    <LinearGradient
      colors={[Colors.secYellow, Colors.priYellow, Colors.secYellow]} // Radial-like effect
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      {/* Close Button & Logo */}
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: RFPercentage(1),
          marginTop: RFPercentage(1),
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(3.5),
            color: Colors.blacky,
            marginLeft: RFPercentage(3),
          }}
        >
          Fork
        </Text>
      </View>

      {/* Navigation Items */}

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => props.navigation.navigate("Activity")}
      >
        <AntDesign name="bars" size={24} color="black" />
        <Text style={styles.navText}>Activity</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => props.navigation.navigate("Settings")}
      >
        <AntDesign name="setting" size={24} color="black" />
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={() => props.navigation.navigate("About")}
      >
        <AntDesign name="infocirlceo" size={24} color="black" />
        <Text style={styles.navText}>About</Text>
      </TouchableOpacity>
    </LinearGradient>
    // </DrawerContentScrollView>
  );
};

const styles = {
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
  },
  navText: {
    fontSize: 18,
    marginLeft: 20,
    fontFamily: FontFamily.semiBold,
    color: "#333",
  },
};

export default CustomDrawerContent;
