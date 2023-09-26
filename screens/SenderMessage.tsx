import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

interface MessageProps {
  message: {
    message: string; // Replace with the actual type of message
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
    </View>
  );
};

export default SenderMessage;
