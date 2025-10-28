import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ExpandableText({ text }: { text: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 140; // number of characters to show before truncating

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <View className="mt-2 mb-6">
      <Text className="text-gray-500 text-base leading-6">
        {isExpanded ? text : text.slice(0, MAX_LENGTH) + (text.length > MAX_LENGTH ? "..." : "")}
      </Text>

      {text.length > MAX_LENGTH && (
        <TouchableOpacity onPress={toggleExpanded}>
          <Text className="text-green-700 font-semibold">
            {isExpanded ? "Read less▲" : "Read more▼"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
