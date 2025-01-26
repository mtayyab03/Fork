import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_600SemiBold,
  Orbitron_700Bold,
  Orbitron_800ExtraBold,
  Orbitron_900Black,
} from "@expo-google-fonts/orbitron";

//navigation
import NavigationStack from "./app/navigation/NavigationStack";
import { ThemeProvider } from "./app/Context/ThemeProvider";

//component
import AppLoading from "./app/components/AppLoading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
