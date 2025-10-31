import images from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center px-6 bg-[#f6f6f6]">
      <View className="w-full h-1/2 mt-20">
        <Image
          source={images.grocery}
          resizeMode="contain"
          className="w-full h-full"
        />
      </View>

      <View className="flex-1 justify-between pb-10">
        <View className="flex-2dd mt-10">
          <Text className="font-semibold text-4xl text-center text-[#243F2F]">
            Find Your Daily
          </Text>
          <Text className="font-semibold text-4xl text-center text-[#243F2F]">
            Grocery Products
          </Text>
          <Text className="text-base text-gray-400 text-center mt-6 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            mollitia molestias.
          </Text>
        </View>

        <View className="w-full">
          <TouchableOpacity
            className="bg-[#43B658] w-full rounded-full py-4 flex items-center justify-center"
            onPress={() => router.navigate("/(tabs)/home")}
          >
            <Text className="text-white font-semibold text-lg">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
