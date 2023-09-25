import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import tw from "twrnc";

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`flex justify-center h-full`}>
      <View style={tw`px-3`}>
        <Text style={tw`text-center`}>Click to Login</Text>
        <Button title="Login" onPress={() => {}}></Button>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
