import images from "@/constants/images";
import AppContext from "@/context/Context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { BellIcon } from "react-native-heroicons/outline";
import { PlusIcon, XMarkIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Favorites() {
  const router = useRouter();
  const { favorites, addToFavorites, addToCart } = useContext(AppContext);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    alert("Product is added to cart");
  };

  const handleRemoveFromFav = (product: any) => {
    addToFavorites(product);
  };
  return (
    <>
      <SafeAreaView edges={["top"]} className="bg-green-800 h-max">
        <View className="px-5 h-max pt-3 pb-4">
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
                  Favorites
                </Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {}}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <BellIcon size={24} color={"#fff"} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, flexGrow: 1 }}
        className="px-4 py-4 bg-gray-100"
      >
        {favorites && favorites.length > 0 ? (
          favorites.map((item: any, index) => (
            <View
              key={index.toString()}
              className="bg-white flex-row items-center p-2 rounded-lg gap-4 mb-3"
            >
              <Image
                source={item.image}
                alt=""
                className="w-24 h-24 rounded-lg"
                resizeMode="contain"
              />

              <View className="flex-1">
                <View className="flex-row justify-between">
                  <View>
                    <Text className="text-[13px] text-[#243F2F] font-semibold">
                      {item.name}
                    </Text>
                    <Text className="text-gray-400 text-sm">
                      {item.category}
                    </Text>
                  </View>
                </View>

                <View className="flex-row justify-between">
                  <Text className="text-[#243F2F] text-base font-bold mt-2 ">
                    ${item.price}
                  </Text>

                  <View className="flex-row items-center gap-3 mb-2 bg-[#eee] p-1 rounded-full">
                    <TouchableOpacity
                      onPress={() => handleRemoveFromFav(item)}
                      className="w-8 h-8 items-center justify-center rounded-full bg-white"
                    >
                      <XMarkIcon size={18} className="font-bold" />
                    </TouchableOpacity>
                    <Text className="font-bold mx-1">{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => handleAddToCart(item)}
                      className="w-8 h-8 items-center justify-center rounded-full bg-green-800"
                    >
                      <PlusIcon size={18} color={"white"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View className="flex-grow flex-1 items-center justify-center">
            <Image
              source={images.emptyCart}
              resizeMode="contain"
              className="w-24 h-24"
            />
            <Text className="font-bold text-xl mt-3 text-[#243F2F] text-center">
              Your Favorites List is Empty
            </Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}
