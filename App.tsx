import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar
      backgroundColor="transparent"
      translucent
      style="light"
      />
      <Text>login app!!</Text>
    </View>
  );
}
