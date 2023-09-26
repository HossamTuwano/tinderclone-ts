import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";
import SenderMessage from "../components/SenderMessage";
import ReceiverMessage from "../components/ReceiverMessage";

// Dummy user data
const dummyUser = {
  id: "123",
  displayName: "John Doe",
  photoURL: "https://example.com/user.jpg", // Replace with an actual photo URL
};

interface Message {
  id: string;
  userId: string;
  displayName: string;
  photoURL: string;
  message: string;
  timestamp: number;
}

interface RouteParams {
  matchDetails: {
    id: string;
    users: Record<string, { displayName: string; photoURL: string }>;
  };
}

const MessageScreen: React.FC = () => {
  const [user, setUser] = useState(dummyUser); // Initialize with dummy user data
  //   const { params } = useRoute<RouteParams>();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  //   const { matchDetails } = params;

  // Dummy messages
  const dummyMessages: Message[] = [
    {
      id: "1",
      userId: "123",
      displayName: "Hossam",
      photoURL:
        "https://avatars.githubusercontent.com/u/51116268?s=400&u=97168419edb7621855406b0b948e77150edcbfbf&v=4",
      message: "Im an Open Sourcer",
      timestamp: Date.now(),
    },
    {
      id: "2",
      userId: "456",
      displayName: "Abdulaziz",
      photoURL: "https://avatars.githubusercontent.com/u/39125180?v=4",
      message: "Lets Collaborate",
      timestamp: Date.now(),
    },
  ];

  const sendMessage = () => {};

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header title={user.displayName} callEnabled={true} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1`}
        keyboardVerticalOffset={10}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={dummyMessages}
            style={tw`pl-4`}
            renderItem={({ item }) => (
              <>
                <View>
                  <SenderMessage key={item.id} message={item} />
                </View>
                <View style={tw` flex-row ml-15`}>
                  <ReceiverMessage key={item.id} message={item} />
                </View>
              </>
            )}
          />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View
        style={tw`flex-row justify-between items-center border-t border-gray-200 px-5 py-2`}
      >
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder="Send Message..."
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button title="Send" color="#FF5864" onPress={sendMessage} />
      </View>
    </SafeAreaView>
  );
};

export default MessageScreen;
