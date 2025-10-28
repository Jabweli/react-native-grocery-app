import AppContext from '@/context/Context';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs, useSegments } from 'expo-router';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

export default function TabsLayout() {
  const {cart} = useContext(AppContext);
   const segments = useSegments();

  // Assuming 'routeToHideTab' is the name of the screen where you want to hide the tab bar
  const isTabHidden = segments[segments.length - 1] === 'cart';

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 10,
          height: 110,
          display: isTabHidden ? "none" : "flex",
        },
        tabBarItemStyle: { paddingTop: 10 },
        tabBarActiveTintColor: "#43B658",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View>
              <Feather
                name="home"
                size={24}
                color={`${focused ? "#43B658" : "gray"}`}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <View className="relative">
              <MaterialCommunityIcons
                name={`${focused ? "shopping-outline" : "shopping-outline"}`}
                size={26}
                color={`${focused ? "#43B658" : "gray"}`}
              />
              <View className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500 absolute -top-2 -right-3 z-30">
                <Text className="text-white font-semibold">{cart.length}</Text>
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome6
                name="heart"
                size={24}
                color={`${focused ? "#43B658" : "gray"}`}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="user-circle"
                size={24}
                color={`${focused ? "#43B658" : "gray"}`}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}