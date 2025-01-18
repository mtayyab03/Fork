import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SplashScreen(props) {
  useEffect(() => {
    // After 3 seconds, navigate to LoginScreen
    const timer = setTimeout(() => {
      props.navigation.navigate("DrawerNavigator", {
        screen: "ActivityScreen",
      });
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <LinearGradient
      colors={[Colors.secGrey, Colors.priGrey, Colors.secGrey]} // Radial-like effect
      start={[0.5, 0]} // Center start
      end={[0.5, 1]} // Expands downward
      style={styles.background}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            fontFamily: FontFamily.semiBold,
            fontSize: RFPercentage(5.4),
            color: Colors.blacky,
          }}
        >
          Fork
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
