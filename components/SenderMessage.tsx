import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

interface MessageProps {
  message: {
    message: string;
    photoURL: string;
  };
}

const SenderMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <View
      style={[
        tw`bg-purple-600 rounded-lg rounded-tr-none px-5 py-3 mx-3 my-2`,
        { alignSelf: "flex-start", marginLeft: "auto" },
      ]}
    >
      <Text style={tw`text-white`}>{message.message}</Text>
      <Image
        style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
        source={{ uri: message.photoURL }}
      />
    </View>
  );
};

export default SenderMessage;
