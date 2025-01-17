import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import TheButton from "../components/TheButton";
import { images } from '../constants'

const index = () => {
  return (
    <SafeAreaView className="items-center justify-center bg-primary h-full">
      <ScrollView contentContainerStyle={{height: "100%"}} className="w-full px-5">
        <View className="w-full items-center min-h-[85vh]">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px] border"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[290px] border"
            resizeMode="fit" 
          />
          
          
          <View className="relative mt-5">
            <Text className="text-4xl text-white font-bold text-center">
              Discover Endless Possibilities with {" "}
               <Text className="text-secondary-200">Aora</Text> 
            </Text>

            <Image
              source={images.path}
              className="w-[137px] h-[17px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless exploartion with Aora
          </Text>

          <TheButton
            title="Continue with Email"
            handlePress={()=>router.push('/sign-in')}
            contentContainerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
