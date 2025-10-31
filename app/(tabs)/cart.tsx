import Modal from '@/components/Modal';
import images from '@/constants/images';
import AppContext from '@/context/Context';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { ArrowLongRightIcon, BellIcon } from 'react-native-heroicons/outline';
import { CreditCardIcon, MinusIcon, PlusIcon, XMarkIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width:screenWidth, height:screenHeight} = Dimensions.get("window");

export default function Cart() {
  const router = useRouter();
  const {cart, setCart, removeFromCart} = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const total = cart.reduce(
        (acc, item:any) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
  }, [cart])


    const handleIncrement = (itemId:number) => {
    const newCartItems:any = cart.map((item:any) => {
      if(item.id == itemId){
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCartItems);
  }

  const handleDecrement = (itemId:number) => {
    const newCartItems = cart.map((item:any) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCart(newCartItems);
  }

  const handleRemoveFromCart = (itemId:number) => {
    removeFromCart(itemId);
    ToastAndroid.showWithGravity(
      "Product removed from cart",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }
  return (
    <>
      <StatusBar style="light" />
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
                <Text className="text-white text-xl font-semibold">Cart</Text>
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

      <SafeAreaView edges={['bottom']} className='flex-1 bg-white'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60, flexGrow: 1 }}
          className="px-4 py-4 bg-gray-100"
        >
          {cart && cart.length > 0 ? (
            cart.map((cartItem: any, index) => (
              <TouchableOpacity
                key={index.toString()}
                // onPress={() => router.navigate(`/product/${cartItem.id}`)}
                className="bg-white flex-row items-center p-2 rounded-lg gap-4 mb-3"
              >
                <Image
                  source={cartItem.image}
                  alt=""
                  className="w-24 h-24 rounded-lg"
                  resizeMode="contain"
                />

                <View className="flex-1 pt-1">
                  <View className="flex-row justify-between">
                    <View>
                      <Link href={`/product/${cartItem.id}`}>
                        <Text className="text-[13px] text-[#243F2F] font-semibold">
                          {cartItem.name}
                        </Text>
                      </Link>

                      <Text className="text-gray-400 text-sm">
                        {cartItem.category}
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => handleRemoveFromCart(cartItem.id)}
                      className="w-8 h-8 items-center justify-center rounded-full bg-[#f5f5f5]"
                    >
                      <XMarkIcon size={18} className="font-bold" />
                    </TouchableOpacity>
                  </View>

                  <View className="flex-row justify-between">
                    <Text className="text-[#243F2F] text-base font-bold mt-2 ">
                      ${cartItem.price}
                    </Text>

                    <View className="flex-row items-center gap-3 mb-2 bg-[#eee] p-1 rounded-full">
                      <TouchableOpacity
                        onPress={() => handleDecrement(cartItem.id)}
                        className="w-8 h-8 items-center justify-center rounded-full bg-white"
                      >
                        <MinusIcon size={18} className="size-4 text-gray-500" />
                      </TouchableOpacity>
                      <Text className="font-bold mx-1">{cartItem.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(cartItem.id)}
                        className="w-8 h-8 items-center justify-center rounded-full bg-green-800"
                      >
                        <PlusIcon size={18} color={"white"} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View className="flex-grow flex-1 items-center justify-center">
              <Image
                source={images.emptyCart}
                resizeMode="contain"
                className="w-24 h-24"
              />
              <Text className="font-bold text-xl mt-3 text-[#243F2F]">
                Your Cart is Empty
              </Text>
              <TouchableOpacity
                className="flex-row gap-2 items-center justify-center bg-green-600 px-8 py-3 rounded-full mt-5"
                onPress={() => router.navigate("/(tabs)/home")}
              >
                <Text className="text-white font-medium">Shop Now</Text>
                <ArrowLongRightIcon color={"white"} />
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>

        {cart && cart.length > 0 && (
          <View style={styles.priceContainer}>
            <View className="flex-row items-center justify-between px-5 py-[10px] gap-3">
              <View>
                <Text className="text-gray-500 text-sm">Total Price</Text>
                <Text className="font-bold text-xl text-[#243F2F]">
                  ${totalPrice.toFixed(2)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsOpen(true)}
                className="bg-green-600 flex-row items-center justify-center px-5 py-4 rounded-full flex-1 ml-10"
              >
                <CreditCardIcon size={16} color={"#fff"} />
                <Text className="font-semibold text-white text-lg">
                  {" "}
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </SafeAreaView>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </>
  );
}


const styles = StyleSheet.create({
  priceContainer: {
    backgroundColor: "white",
    paddingTop: 5,
    // paddingBottom: 45,
    paddingHorizontal: 5,
  },
});