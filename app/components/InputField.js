import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

export default function InputField({ placeTitle, value, onChange }) {
  return (
    <View style={styles.emailmain}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeTitle}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  emailmain: {
    width: "90%",
    height: RFPercentage(6.5),
    backgroundColor: Colors.priYellow,
    borderRadius: RFPercentage(1),
    borderColor: Colors.primary,
    color: Colors.blacky,
    paddingHorizontal: RFPercentage(2),
    justifyContent: "center",
  },
  input: { fontFamily: FontFamily.regular, fontSize: RFPercentage(2) },
});
