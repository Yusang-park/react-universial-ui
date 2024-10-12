import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <button
      className="self-center px-8 py-2 bg-primary rounded-lg web:hover:bg-[#000] native:active:bg-sky-600"
      onClick={onPress}
    >
      <Text className="text-white text-lg font-bold">{text}</Text>
    </button>
  );
};
