import images from '@/constants/images'
import AppContext from '@/context/Context'
import { useNavigation } from 'expo-router'
import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Modal({setIsOpen}:{setIsOpen: (value:boolean) => void}) {
    const router = useNavigation();
    const {clearCart} = useContext(AppContext);

    const handleCloseModal = () => {
        setIsOpen(false);
        clearCart();
        router.goBack();
    }
  return (
    <View className='flex-1 bg-black/70 w-full px-8 h-full absolute top-0 left-0 z-[9999px] items-center justify-center'>
      <View className='bg-white rounded-[40px] p-8 relative z-50 items-center justify-center'>
        <Image source={images.check} resizeMode='contain' className='w-32 h-32 mb-5'/>
        
        <Text className='text-2xl font-bold text-center'>Order Successful</Text>
        <Text className='text-base font-medium text-gray-400 text-center mt-2'>Your order #9685364 was successfully placed</Text>
        
        <View className='mt-12 gap-5'>
            <TouchableOpacity className='bg-green-600 items-center w-[180px] px-10 py-4 rounded-full border-2 border-green-600'>
            <Text className='text-white font-bold'>Track My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCloseModal} className='w-[180px] items-center px-10 py-4 rounded-full border-2 border-green-600'>
            <Text className='text-green-600 font-bold'>Go Back</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}