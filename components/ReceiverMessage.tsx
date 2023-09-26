import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import tw from "twrnc";

interface MessageProps {
  message: {
    photoURL: string;
    message: string;
  };
}

const ReceiverMessage: React.FC<MessageProps> = ({ message }) => {
  return (
    <View>
      <View
        style={[
          tw`bg-red-600 rounded-lg rounded-tl-none px-5 py-3 mx-3 my-2 ml-14`,
          { alignSelf: "flex-end", marginLeft: "auto" },
        ]}
      >
        <Image
          style={tw`h-12 w-12 rounded-full absolute top-0 -left-14`}
          source={{ uri: message.photoURL }}
        />
        <Text>{message.message}</Text>
      </View>
    </View>
  );
};

export default ReceiverMessage;
