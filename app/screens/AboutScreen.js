import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome6, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const AboutScreen = () => {
  const navigation = useNavigation(); // 👈 Hook to get navigation
  // Function to open drawer
  const openDrawer = () => {
    navigation.openDrawer();
  };
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
          About
        </Text>
      </View>
    </LinearGradient>
  );
};

export default AboutScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
