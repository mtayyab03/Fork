import React, { useState, useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Modal,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

//Components
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

//config
import Colors from "../config/Colors";
import { FontFamily } from "../config/font";

const ActivityScreen = () => {
  const navigation = useNavigation(); // 👈 Hook to get navigation
  // Function to open drawer
  const openDrawer = () => {
    navigation.openDrawer();
  };

  const gameCard = [
    { id: 1, name: "Item A", hint: "Think Dynamic part of Game" },
    {
      id: 2,
      name: "Item B",
      hint: "https://yavuzceliker.github.io/sample-images/image-1.jpg",
    },
    { id: 3, name: "Item C", hint: "New Dynamic part of Sunn" },
    {
      id: 4,
      name: "Item D",
      hint: "https://www.gstatic.com/webp/gallery3/1.sm.png",
    },
    { id: 5, name: "Item E", hint: "Find the missing piece" },
    {
      id: 6,
      name: "Item F",
      hint: "https://yavuzceliker.github.io/sample-images/image-2.jpg",
    },
    { id: 7, name: "Item G", hint: "Explore the unknown" },
    {
      id: 8,
      name: "Item H",
      hint: "https://www.gstatic.com/webp/gallery3/2.sm.png",
    },
    { id: 9, name: "Item I", hint: "A new challenge awaits" },
    {
      id: 10,
      name: "Item J",
      hint: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
    },
    { id: 11, name: "Item K", hint: "The key to success" },
    {
      id: 12,
      name: "Item L",
      hint: "https://www.gstatic.com/webp/gallery3/3.sm.png",
    },
    { id: 13, name: "Item M", hint: "Unlock your potential" },
    {
      id: 14,
      name: "Item N",
      hint: "https://yavuzceliker.github.io/sample-images/image-4.jpg",
    },
    { id: 15, name: "Item O", hint: "Navigate through the maze" },
    {
      id: 16,
      name: "Item P",
      hint: "https://www.gstatic.com/webp/gallery3/4.sm.png",
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedHint, setSelectedHint] = useState("");
  const [cardStates, setCardStates] = useState(
    gameCard.map((item) => ({
      id: item.id,
      bgColor: Colors.priYellow,
      textColor: Colors.black35,
    }))
  );

  const [lastTap, setLastTap] = useState(null);
  // Function to handle item click
  const handleItemPress = (hint) => {
    setSelectedHint(hint);
    setModalVisible(true);
  };

  // Function to handle double tap
  const handleDoubleTap = (id) => {
    setCardStates((prevStates) =>
      prevStates.map((item) =>
        item.id === id
          ? {
              ...item,
              bgColor:
                item.bgColor === Colors.priYellow
                  ? Colors.black35
                  : Colors.priYellow,
              textColor:
                item.textColor === Colors.black35
                  ? Colors.priYellow
                  : Colors.black35,
            }
          : item
      )
    );
  };

  const handleItemTap = (id, hint) => {
    const now = Date.now();

    if (lastTap && now - lastTap < 300) {
      // Double tap detected
      handleDoubleTap(id);
      setLastTap(null); // Reset tap
    } else {
      // Single tap, open modal after delay
      setLastTap(now);
      setTimeout(() => {
        if (lastTap) {
          handleDoubleTap(id);
        }
      }, 300);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.secGrey, Colors.priGrey, Colors.secGrey]} // Radial-like effect
      start={[0.5, 0]} // Center start
      end={[0.5, 1]} // Expands downward
      style={styles.screen}
    >
      <View style={{ marginTop: RFPercentage(7) }} />
      <View
        style={{
          width: "90%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
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
          }}
        >
          <FontAwesome6 name="bars" color={Colors.lightWhite} size={20} />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: FontFamily.bold,
            fontSize: RFPercentage(2.5),
            color: Colors.priYellow,
            marginLeft: RFPercentage(1.5),
          }}
        >
          XXXX
        </Text>
      </View>

      <View style={{ marginTop: RFPercentage(5) }} />
      <Text
        style={{
          fontFamily: FontFamily.semiBold,
          fontSize: RFPercentage(4.4),
          color: Colors.blacky,
        }}
      >
        Fork
      </Text>
      <Text
        style={{
          fontFamily: FontFamily.medium,
          fontSize: RFPercentage(2),
          color: Colors.text,
          marginTop: RFPercentage(1),
        }}
      >
        Classification Challenge
      </Text>

      <View
        style={{
          width: "95%",
          marginTop: RFPercentage(5),
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gameCard.map((item) => {
          const cardState = cardStates.find((state) => state.id === item.id);
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleItemTap(item.id, item.hint)}
              onLongPress={() => handleItemPress(item.hint)}
              activeOpacity={0.7}
              style={{
                width: RFPercentage(8),
                height: RFPercentage(8),
                borderRadius: RFPercentage(1),
                backgroundColor: cardState
                  ? cardState.bgColor
                  : Colors.priYellow,
                alignItems: "center",
                justifyContent: "center",
                padding: RFPercentage(1.5),
                margin: RFPercentage(1),
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.medium,
                  fontSize: RFPercentage(1.8),
                  color: cardState ? cardState.textColor : Colors.black35,
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.loginbutton} activeOpacity={0.7}>
        <AppButton title="Submit" />
      </TouchableOpacity>

      {/* Hint Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <LinearGradient
            colors={[Colors.secYellow, Colors.priYellow, Colors.secYellow]}
            start={[0.5, 0]}
            end={[0.5, 1]}
            style={{
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: RFPercentage(2),
              padding: RFPercentage(1),
              paddingBottom: RFPercentage(8),
            }}
          >
            {/* Close Button */}
            <View style={styles.closeButton}>
              <TouchableOpacity
                style={{
                  width: RFPercentage(4),
                  height: RFPercentage(4),
                  borderRadius: 50,
                  backgroundColor: Colors.red,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => setModalVisible(false)}
              >
                <AntDesign name="close" size={18} color={Colors.white} />
              </TouchableOpacity>
            </View>
            {/* Hint Text */}
            <Text style={styles.modalTitle}>Hint!</Text>

            {/* Show text or image based on hint */}
            {selectedHint && selectedHint.startsWith("http") ? (
              <Image source={{ uri: selectedHint }} style={styles.hintImage} />
            ) : (
              <View style={{ width: "70%" }}>
                <Text style={styles.hintText}>{selectedHint}</Text>
              </View>
            )}
          </LinearGradient>
        </View>
      </Modal>
    </LinearGradient>
  );
};

export default ActivityScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  // modal

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 20,
  },
  closeButton: {
    width: "100%",
    alignItems: "flex-end",
  },
  modalTitle: {
    fontFamily: FontFamily.bold,
    fontSize: RFPercentage(3),
    color: Colors.blacky,
    marginBottom: RFPercentage(2),
  },
  hintText: {
    fontFamily: FontFamily.medium,
    fontSize: RFPercentage(2.5),
    color: Colors.text,
    textAlign: "center",
  },
  hintImage: {
    width: RFPercentage(20),
    height: RFPercentage(20),
    resizeMode: "contain",
    borderRadius: RFPercentage(1),
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
