import ExpandableText from "@/components/ExpandedText";
import AppContext from "@/context/Context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useHeaderHeight } from "@react-navigation/elements";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View
} from "react-native";
import {
  ClockIcon,
  FireIcon,
  HeartIcon,
  ShoppingBagIcon,
  StarIcon
} from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Product = () => {
  const router = useRouter();
  const {data, cart, addToCart, addToFavorites} = useContext(AppContext);

  const headerHeight = useHeaderHeight();
  const { id } = useLocalSearchParams();
  const product:any = data.filter((item:any) => item.id.toString() === id);

  const handleAddToCart = () => {
    addToCart(product[0]);
    ToastAndroid.showWithGravity(
      "Product added to cart",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  const handleAddToFav = () => {
    addToFavorites(product[0]);
  }

  return (
    <>
      <SafeAreaView edges={["top"]} className="bg-green-800">
        <View className="px-5 h-max pt-1">
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <FontAwesome6 name="arrow-left" size={18} color="white" />
            </TouchableOpacity>

            <View className="pt-3">
              <View className="flex-row items-center gap-2">
                <Text className="text-white text-xl font-semibold">
                  Product Details
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={handleAddToFav}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              {product[0].isFavorite ? (
                <HeartIcon size={24} color={"white"} />
              ) : (
                <FontAwesome6 name="heart" size={20} color={"white"} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} className="bg-white flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          className="bg-green-800"
        >
          <View className="relative h-[200px]">
            <Image
              source={product[0].image}
              resizeMode="contain"
              className="w-full h-[350px] z-[9999px] mx-auto absolute -bottom-40"
            />
          </View>

          <View className="flex-1 bg-[#f5f5f5] px-5 rounded-tr-[40px] rounded-tl-[40px] py-6 pt-[100px] overflow-hidden">
            <View>
              <Text className="text-xl font-bold text-[#243F2F]">
                {product[0].name}
              </Text>
              <Text className="text-base font-base text-gray-400">
                {product[0].category}
              </Text>

              <View className="flex-row items-center gap-10 mt-4">
                <View className="flex-row items-center gap-1">
                  <StarIcon size={18} color={"orange"} />
                  <Text className="text-gray-500 text-[13px]">4.5(84)</Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <FireIcon size={18} color={"red"} />
                  <Text className="text-gray-500 text-[13px]">100Kcal</Text>
                </View>

                <View className="flex-row items-center gap-1">
                  <ClockIcon size={18} color={"orange"} />
                  <Text className="text-gray-500 text-[13px]">20min</Text>
                </View>
              </View>

              <Text className="text-lg font-semibold mt-5 text-[#243F2F]">
                Description
              </Text>

              <ExpandableText text={product[0].desc} />

              <View className="flex-row gap-3">
                <View className="bg-white rounded-lg flex-1 items-center p-[10px]">
                  <Text className="text-sm text-gray-500">Type</Text>
                  <Text className="text-[#243F2F] font-medium text-center">
                    {product[0].category}
                  </Text>
                </View>
                <View className="bg-white rounded-lg flex-1 items-center p-[10px]">
                  <Text className="text-sm text-gray-500">Delivery</Text>
                  <Text className="text-[#243F2F] font-medium">45min</Text>
                </View>
                <View className="bg-white rounded-lg flex-1 items-center p-[10px]">
                  <Text className="text-sm text-gray-500">Ingredient</Text>
                  <Text className="text-[#243F2F] font-medium">Full Tuna</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View className="bg-white">
          <View className="flex-row items-center justify-between px-5 py-[10px] gap-3">
            <View>
              <Text className="text-gray-500">Price</Text>
              <Text className="font-bold text-xl text-[#243F2F]">
                ${product[0].price}
              </Text>
            </View>
            <TouchableOpacity
              className="bg-green-600 flex-row items-center justify-center px-5 py-4 rounded-full flex-1 ml-5"
              onPress={handleAddToCart}
            >
              <ShoppingBagIcon size={18} color={"#fff"} />
              <Text className="font-semibold text-white text-lg">
                {" "}
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Product;
