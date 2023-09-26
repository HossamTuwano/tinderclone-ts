import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import ChatRow from "./ChatRow";

interface Match {
  id: string;
  name: string;
  message: string;
}

const ChatList: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([
    {
      id: "1",
      name: "Hossam",
      message: "Say Hi!",
    },
  ]);

  console.log(matches);

  return (
    <FlatList
      style={tw`h-full`}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
    />
  );
};

export default ChatList;
