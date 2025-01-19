import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function AppButton({ title, buttonColor }) {
  return (
    <LinearGradient
      colors={[Colors.secYellow, Colors.priYellow, Colors.secYellow]} // Radial-like effect
      start={[0.5, 0]} // Center start
      end={[0.5, 1]} // Expands downward
      style={{
        width: "90%",
        height: RFPercentage(6.5),
        borderRadius: RFPercentage(1),
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFPercentage(2),
      }}
    >
      <Text style={styles.buttontext}>{title}</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  buttontext: {
    color: Colors.blacky,
    fontSize: RFPercentage(2.2),
    fontFamily: FontFamily.semiBold,
  },
});
