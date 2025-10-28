import ExpandableText from "@/components/ExpandedText";
import AppContext from "@/context/Context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useHeaderHeight } from "@react-navigation/elements";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  HeartIcon
} from "react-native-heroicons/outline";
import {
  ClockIcon,
  FireIcon,
  ShoppingBagIcon,
  StarIcon
} from "react-native-heroicons/solid";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const Product = () => {
  const {data, cart, addToCart, addToFavorites} = useContext(AppContext);

  const headerHeight = useHeaderHeight();
  const { id } = useLocalSearchParams();
  const product:any = data.filter((item:any) => item.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product[0].price);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product[0]);
    alert("Product added to cart");
  }

  const handleAddToFav = () => {
    addToFavorites(product[0]);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Product Details",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 15, color: "white" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <FontAwesome6 name="arrow-left" size={18} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
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
          ),
          animation: "slide_from_bottom",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        className="bg-green-800"
      >
        <View className="relative h-[270px] bg-green-800">
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
                <Text style={styles.tagText}>Type</Text>
                <Text className="text-[#243F2F] font-medium text-center">
                  {product[0].category}
                </Text>
              </View>
              <View className="bg-white rounded-lg flex-1 items-center p-[10px]">
                <Text style={styles.tagText}>Delivery</Text>
                <Text className="text-[#243F2F] font-medium">45min</Text>
              </View>
              <View className="bg-white rounded-lg flex-1 items-center p-[10px]">
                <Text style={styles.tagText}>Ingredient</Text>
                <Text className="text-[#243F2F] font-medium">Full Tuna</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.priceContainer}>
        <View style={styles.priceFlexWrapper}>
          <View>
            <Text className="text-gray-500">Price</Text>
            <Text className="font-bold text-xl text-[#243F2F]">
              ${totalPrice}
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
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  headerLeftIcon: {
    backgroundColor: "red",
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightIcon: {
    backgroundColor: "#313131",
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  detailTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 5,
  },

  detailRating: {
    // color: "#FFD700",
    // color: Colors.orange,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  foodImage: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 20,
  },

  descTitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },

  descText: {
    color: "#CCCCCC",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
    fontFamily: "Poppins-Regular",
  },

  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#313131",
    width: 120,
    // marginHorizontal: "auto",
    paddingHorizontal: 5,
    paddingVertical: 7,
    borderRadius: 30,
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  quantity: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 15,
  },

  tags: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  tag: {
    backgroundColor: "#313131",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 5,
  },

  tagText: {
    color: "#999999",
    fontSize: 12,
    marginBottom: 5,
    fontFamily: "Poppins-Regular",
  },

  tagValue: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },

  priceContainer: {
    backgroundColor: "white",
    paddingTop: 5,
    paddingBottom: 55,
  },

  priceFlexWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  detailPrice: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },

  addToCartButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    flex: 1,
    marginLeft: 20,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
});
