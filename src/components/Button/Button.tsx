import React, { Children } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { tailwind } from "tailwind";

interface ButtonProps {
  children: string;
  type?: "primary" | "secondary";
  onPress: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = "primary",
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={tailwind(
          `px-4 py-3 rounded-sm  ${
            type === "primary" ? "bg-primary" : "bg-white border border-primary"
          }`
        )}
      >
        <Text
          style={[
            tailwind("uppercase font-bold text-xs tracking-wide"),
            tailwind(type === "primary" ? "text-white" : "text-primary"),
          ]}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
