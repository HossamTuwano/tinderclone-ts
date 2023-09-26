import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ChatList from "../components/ChatList";

const ChatScreen: React.FC = () => {
  const callEnabled = true;

  return (
    <View>
      <Header title="Chat" callEnabled={callEnabled} />
      <ChatList />
    </View>
  );
};

export default ChatScreen;
