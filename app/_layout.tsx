import { AppProvider } from "@/context/Context";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen
          name="(tabs)"
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack>
    </AppProvider>
  );
}
