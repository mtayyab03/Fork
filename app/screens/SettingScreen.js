import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  Switch,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";
import InputField from "../components/InputField";

const SettingScreen = () => {
  const navigation = useNavigation(); // 👈 Hook to get navigation
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [text, setText] = useState("");
  // Function to open drawer
  const openDrawer = () => {
    navigation.openDrawer();
  };

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const themeStyles = isDarkMode ? styles.darkTheme : styles.lightTheme;

  return (
    <LinearGradient
      colors={[Colors.secGrey, Colors.priGrey, Colors.secGrey]} // Radial-like effect
      start={[0.5, 0]} // Center start
      end={[0.5, 1]} // Expands downward
      style={styles.screen}
    >
      <View style={{ marginTop: RFPercentage(8) }} />
      <View
        style={{
          width: "90%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={openDrawer}
          activeOpacity={0.7}
          style={{
            width: RFPercentage(4),
            height: RFPercentage(4),
            borderRadius: RFPercentage(0.5),
            backgroundColor: Colors.priYellow,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 0,
          }}
        >
          <FontAwesome6 name="bars" color={Colors.lightWhite} size={20} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.5),
            color: Colors.blacky,
            marginLeft: RFPercentage(1.5),
          }}
        >
          Settings
        </Text>
      </View>

      {/* switch */}
      <View style={styles.row}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          thumbColor={Colors.white}
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{
            false: Colors.lightGrey, // Track color when off
            true: Colors.secYellow, // Track color when on
          }}
        />
      </View>

      <View style={{ marginTop: RFPercentage(3) }} />
      <InputField
        placeTitle="Enter Game  URL"
        value={text}
        onChange={setText}
      />

      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="Download JSON" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginTop: RFPercentage(6),
  },
  text: {
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(2),
    color: Colors.black35,
  },
  darkTheme: {
    backgroundColor: "#121212",
  },
  lightTheme: {
    backgroundColor: "#f5f5f5",
  },
  loginbutton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFPercentage(1.5),
    position: "absolute",
    bottom: RFPercentage(7),
  },
});
