import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Slot, SplashScreen } from "expo-router";
import { ImageBackground, StyleSheet, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/screen.constant";
export { ErrorBoundary } from "expo-router";

import bg from "../assets/bg.png";

export const unstable_settings = {
  initialRouteName: "/",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="repeat">
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </ImageBackground>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});
