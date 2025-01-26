import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { FontAwesome6, Fontisto, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Context/ThemeProvider";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import InputField from "../components/InputField";

//config
import icons from "../config/icons";
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const AboutScreen = () => {
  const navigation = useNavigation(); // 👈 Hook to get navigation
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const { Colors } = useTheme();
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

      <View style={{ marginTop: RFPercentage(2) }} />
      {/* ID */}
      <View style={styles.row}>
        <Text style={[styles.text, { color: Colors.black35 }]}>Device Id</Text>

        <View
          style={[
            styles.emailmain,
            {
              backgroundColor: Colors.priYellow,
              borderRadius: RFPercentage(1),
              borderColor: Colors.primary,
              color: Colors.blacky,
            },
          ]}
        >
          <Text
            style={{
              fontFamily: FontFamily.medium,
              fontSize: RFPercentage(2),
              color: Colors.black35,
            }}
          >
            758923703
          </Text>
        </View>
      </View>

      {/* name */}
      <View style={styles.row}>
        <Text style={[styles.text, { color: Colors.black35 }]}>Name</Text>
      </View>
      <InputField
        placeTitle="Enter your name"
        value={name}
        onChange={setName}
      />

      {/* age */}
      <View style={styles.row}>
        <Text style={[styles.text, { color: Colors.black35 }]}>Age</Text>
      </View>
      <InputField placeTitle="Enter your age" value={age} onChange={setAge} />

      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="Upload" />
      </TouchableOpacity>
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

  row: {
    width: "90%",
    justifyContent: "center",
    marginTop: RFPercentage(2),
  },
  text: {
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(2),

    marginBottom: RFPercentage(1),
  },
  emailmain: {
    width: "100%",
    height: RFPercentage(6.5),
    paddingHorizontal: RFPercentage(2),
    justifyContent: "center",
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
