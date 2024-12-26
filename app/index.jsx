import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl text-red-600 font-pblack">testing2</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go to link
      </Link>
      <StatusBar hidden={true} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
