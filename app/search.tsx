import AppContext from "@/context/Context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { HeartIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: ScreenWidth } = Dimensions.get("window");

export default function Search() {
  const { data, searchText, setSearchText, addToCart, addToFavorites } =
    useContext(AppContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchProducts = () => {
      if (searchText.trim().length !== 0) {
        setSearchResults([
          ...data.filter((item: any) =>
            item.name
              .trim()
              .toLowerCase()
              .includes(searchText.trim().toLowerCase())
          ),
        ]);
      }
    };

    searchProducts();
  }, [searchText]);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    ToastAndroid.showWithGravity(
      "Product added to cart",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    // alert("Product added to cart");
  };

  const handleFavorite = (product: any) => {
    addToFavorites(product);
    ToastAndroid.showWithGravity(
      "Product added to favorites",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  // console.log(searchText);
  return (
    <>
      <SafeAreaView edges={["top", "bottom"]} className="bg-green-800 flex-1">
        <View className="px-5 h-max pt-3 pb-4">
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <FontAwesome6 name="arrow-left" size={18} color="white" />
            </TouchableOpacity>

            <View className="pt-3">
              <Text className="text-lg text-white mt-1 font-bold">Search</Text>
            </View>

            <TouchableOpacity className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600">
              <FontAwesome6 name="bell" size={18} color="white" />
            </TouchableOpacity>
          </View>

          {/* search bar */}
          <View className="w-full bg-gray-100 flex-row items-center pl-4 pr-2 py-1 rounded-lg mt-5">
            <TextInput
              placeholder="Search Your Groceries"
              className="flex-1 font-medium"
              value={searchText}
              placeholderTextColor={"#ccc"}
              onChangeText={(text) => setSearchText(text)}
            />

            {searchText.length > 0 && (
              <TouchableOpacity
                onPress={() => setSearchText("")}
                className="bg-green-600gg w-10 h-10 p-2 rounded-full bg-red-50 border border-gray-200 items-center justify-center"
              >
                {/* <MagnifyingGlassIcon size={24} color={"#ccc"} /> */}
                <FontAwesome6 name="x" size={14} color={"red"} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          className="flex-1 bg-white p-5 pb-60"
        >
          <View className="flex-1 flex-row flex-wrap gap-[10px] bg-white pb-20">
            {searchResults && searchResults.length > 0 ? (
              searchResults.map((item: any) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => router.navigate(`/product/${item.id}`)}
                  className="border border-[#eee] rounded-xl overflow-hidden p-2 relative"
                  style={{ width: ScreenWidth * 0.44 }}
                >
                  <Image
                    source={item.image}
                    alt={item.name}
                    className="w-full h-[120px] rounded-xl"
                  />

                  <View className="py-2 px-1">
                    <Text
                      className="font-semibold text-[13px] text-[#243F2F]"
                      numberOfLines={1}
                      ellipsizeMode="tail"
                    >
                      {item.name}
                    </Text>
                    <Text className="text-sm text-gray-400 font-medium">
                      {item.category}
                    </Text>

                    <View className="flex-row items-center justify-between">
                      <View className="flex-row gap-1 items-center">
                        <Text className="font-bold text-[16px] text-[#243F2F]">
                          ${item.price}
                        </Text>
                        <Text className="text-sm text-gray-400 line-through font-semibold">
                          $16
                        </Text>
                      </View>

                      <TouchableOpacity
                        onPress={() => handleAddToCart(item)}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-green-800"
                      >
                        <FontAwesome6 name="plus" size={18} color="white" />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => handleFavorite(item)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white absolute top-2 right-2 shadow"
                  >
                    {item.isFavorite ? (
                      <HeartIcon size={22} color={"green"} />
                    ) : (
                      <FontAwesome6 name="heart" size={18} color={"green"} />
                    )}
                  </TouchableOpacity>
                </TouchableOpacity>
              ))
            ) : (
              <View className="flex-1 items-center justify-center w-full">
                <Text className="font-bold text-lg text-black/60">
                  No items found
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
