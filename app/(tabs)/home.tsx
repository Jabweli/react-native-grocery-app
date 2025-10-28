import Categories from '@/components/Categories'
import Products from '@/components/Products'
import images from '@/constants/images'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { useNavigation } from 'expo-router'
import React from 'react'
import { ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  const router = useNavigation();

  return (
    <View className="flex-1 bg-[#f9f9f9ddd]">
      <SafeAreaView className=" bg-green-800 h-[190px]">
        <View className="px-5 py-5">
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => router.goBack()}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <FontAwesome6 name="arrow-left" size={18} color="white" />
            </TouchableOpacity>

            <View className="pt-3">
              <View className="flex-row items-center gap-2">
                <FontAwesome5 name="map-marker-alt" size={16} color="white" />
                <Text className="text-white text-base font-medium">
                  Location
                </Text>
              </View>

              <Text className="text-lg text-white mt-1 font-bold">
                Kampala, UG
              </Text>
            </View>

            <TouchableOpacity className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600">
              <FontAwesome6 name="bell" size={18} color="white" />
            </TouchableOpacity>
          </View>

          {/* search bar */}
          <View className="w-full bg-gray-100 flex-row items-center px-4 py-1 rounded-lg mt-5">
            <TextInput
              placeholder="Search Your Groceries"
              className="flex-1 font-medium"
              placeholderTextColor={"#ccc"}
            />
             <MagnifyingGlassIcon size={24} color={"#ccc"}/>
          </View>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" bg-[#f9f9f9]"
      >
        <View className="flex-1 py-4">
          {/* banner */}
          <View className="w-full px-4 rounded-xl overflow-hidden mb-4 mt-4dd">
            <ImageBackground
              source={images.banner}
              className="w-full h-[180px] rounded-xl overflow-hidden p-5"
            >
              <View className="w-[70%] gap-1">
                <Text className="font-bold text-[#243F2F] text-[21px]">
                  Fresh Items with fast grocery delivery
                </Text>
                <Text className="text-gray-500 text-sm">
                  We try our best to ensure our customers happiness
                </Text>
                <TouchableOpacity className="bg-green-800 w-[100px] px-3 py-3 rounded-full items-center justify-center mt-1">
                  <Text className='text-white font-semibold text-sm'>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <Text className="text-black font-semibold text-lg px-5">
            Categories
          </Text>
          <View className="py-5">
            <Categories />
          </View>

          <View className="flex-row items-center justify-between px-5 mt-3">
            <Text className="text-black font-semibold text-lg">Products</Text>
            <TouchableOpacity>
              <Text className="text-green-500 font-semibold">See All</Text>
            </TouchableOpacity>
          </View>

          <View className="px-4 py-5">
            <Products />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}