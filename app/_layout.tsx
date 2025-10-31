import { AppProvider } from "@/context/Context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../global.css";

export default function RootLayout() {
  return (
    <AppProvider>
      <StatusBar style='light'/>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(tabs)"
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="search" />
      </Stack>
    </AppProvider>
  );
}
