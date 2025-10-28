import images from '@/constants/images'
import AppContext from '@/context/Context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { router, Stack } from 'expo-router'
import React, { useContext } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BellIcon } from 'react-native-heroicons/outline'
import { XMarkIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Favorites() {
  const {favorites, addToFavorites } = useContext(AppContext);

  const handleRemoveFromFav = (product:any) => {
    addToFavorites(product);
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Favorites",
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
              onPress={() => {}}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-green-600"
            >
              <BellIcon size={24} color={"#fff"} />
            </TouchableOpacity>
          ),
          animation: "slide_from_bottom",
        }}
      />
      <SafeAreaView className="bg-green-800 pb-5"></SafeAreaView>
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
                resizeMode='contain'
              />

              <View className="flex-1">
                <View className='flex-row justify-between'>
                  <View>
                    <Text className="text-[13px] text-[#243F2F] font-semibold">
                      {item.name}
                    </Text>
                    <Text className="text-gray-400 text-sm">{item.category}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => handleRemoveFromFav(item)}
                    className="w-8 h-8 items-center justify-center rounded-full bg-[#f5f5f5]"
                  >
                    <XMarkIcon size={18} className='font-bold'/>
                  </TouchableOpacity>
                </View>

                <View className="flex-row justify-between">
                  <Text className="text-[#243F2F] text-base font-bold mt-2 ">
                    ${item.price}
                  </Text>

                  {/* <View className="flex-row items-center gap-3 mb-2 bg-[#eee] p-1 rounded-full">
                    <TouchableOpacity
                      onPress={() => {}}
                      className="w-8 h-8 items-center justify-center rounded-full bg-white"
                    >
                      <MinusIcon size={18} className="size-4 text-gray-500" />
                    </TouchableOpacity>
                    <Text className="font-bold mx-1">{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {}}
                      className="w-8 h-8 items-center justify-center rounded-full bg-green-800"
                    >
                      <PlusIcon size={18} color={"white"} />
                    </TouchableOpacity>
                  </View> */}
                </View>
              </View>
            </View>
          ))
        ) : (
          <View className="flex-grow flex-1 items-center justify-center">
            <Image source={images.emptyCart} resizeMode='contain' className='w-24 h-24'/>
            <Text className="font-bold text-xl mt-3 text-[#243F2F]">Your Favorites List is Empty</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}