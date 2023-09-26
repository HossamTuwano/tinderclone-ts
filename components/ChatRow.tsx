import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";
import tw from "twrnc";

interface ChatRowProps {
  matchDetails: {
    id: string;
    name: string;
    message: string;
  };
}

const ChatRow: React.FC<ChatRowProps> = ({ matchDetails }) => {
  const nav: NavigationProp<ParamListBase> = useNavigation();

  return (
    <TouchableOpacity
      style={[
        tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`,
        styles.cardShadow,
      ]}
      onPress={() =>
        nav.navigate("Message", {
          matchDetails,
        })
      }
    >
      <Image
        style={tw`rounded-full h-16 w-16 mr-4`}
        source={{
          uri: "https://avatars.githubusercontent.com/u/51116268?s=400&u=97168419edb7621855406b0b948e77150edcbfbf&v=4",
        }}
      />
      <View>
        <Text style={tw`text-lg font-semibold`}>{matchDetails.name}</Text>
        <Text>{matchDetails.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRow;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
