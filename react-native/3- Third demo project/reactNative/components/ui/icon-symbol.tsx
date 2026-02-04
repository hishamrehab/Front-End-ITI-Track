import { SymbolView } from "expo-symbols";
import React from "react";
import {
  StyleProp,
  ViewStyle,
} from "react-native";

interface IconSymbolProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function IconSymbol({
  name,
  size = 24,
  color = "black",
  style,
}: IconSymbolProps) {
  return (
    <SymbolView
      name={
        name as any
      }
      size={
        size
      }
      tintColor={
        color
      }
      style={
        style
      }
    />
  );
}
