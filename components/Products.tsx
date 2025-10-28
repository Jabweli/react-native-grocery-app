import AppContext from '@/context/Context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';

const { width: ScreenWidth } = Dimensions.get("window");

type Product = {
  id: number,
  name:string,
  price:string,
  category:string,
  stars:string,
  image: any,
  desc: string,
  isFavorite: boolean
}

export default function Products() {

  const {data, addToCart, addToFavorites, activeCategory} = useContext(AppContext);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filtered = activeCategory && activeCategory != "All"
    ? data.filter((product:any) => product.category == activeCategory)
    : data;

    setFilteredProducts(filtered);
  }, [activeCategory, data])
  
  const handleAddToCart = (product:any) => {
    addToCart(product);
    alert("Product added to cart");
  }

  const handleFavorite = (product:any) => {
    addToFavorites(product);
  }

  return (
    <FlatList
      horizontal
      bounces={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      data={filteredProducts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.navigate(`/product/${item.id}`)}
          className="border border-[#eee] rounded-xl overflow-hidden p-2 relative"
          style={{ width: ScreenWidth * 0.45 }}
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
      )}
      ListEmptyComponent={() => (
        <View className="flex-1 items-center justify-center bg-amber-200">
          <Text className="text-gray-500 text-center">
            No products available
          </Text>
        </View>
      )}
    />
  );
}