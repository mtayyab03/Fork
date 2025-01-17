import React, { useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function SplashScreen(props) {
  // useEffect(() => {
  //   // After 3 seconds, navigate to LoginScreen
  //   const timer = setTimeout(() => {
  //     props.navigation.navigate("HomeScreen");
  //   }, 3000);

  //   // Clear the timer when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <View style={styles.background}>
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            fontFamily: FontFamily.medium,
            fontSize: RFPercentage(5.4),
            color: Colors.white,
          }}
        >
          Fork
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.blacky,
    alignItems: "center",
    justifyContent: "center",
  },
});
