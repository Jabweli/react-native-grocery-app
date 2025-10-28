import { categories } from '@/constants';
import AppContext from '@/context/Context';
import React, { useContext } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

export default function Categories() {
  const {activeCategory, setActiveCategory} = useContext(AppContext);

  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => {
        let isActive = item.title == activeCategory;
        
        return (
          <TouchableOpacity
            key={index.toString()}
            onPress={() => setActiveCategory(item.title)}
            className={
              "flex-col items-center justify-center px-3gg py-1 rounded-full"
            }
          >
            <View>
              <Image
                source={item.image}
                resizeMode="contain"
                className={`w-20 h-20 rounded-full border ${isActive ? "border-2 border-green-800":"border-[#eee]"}`}
              />
            </View>
            <Text
              className={`font-medium text-[13px] mt-2 ${
                isActive ? "text-green-800" : "text-black"
              }`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{gap: 15, paddingHorizontal: 10}}
      horizontal
      showsHorizontalScrollIndicator={false} 
    />
  );
}