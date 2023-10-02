import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "../firebaseConfig";
import tw from "twrnc";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const nav: NavigationProp<ParamListBase> = useNavigation();

  useEffect(() => {
    if (name && password && email) {
      nav.navigate("Login");
    }
  }, [loading, nav]);

  const onHandleSignup = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userRef = doc(database, "users", user.uid);
      await setDoc(userRef, {
        displayName: name,
        email: email,
        uid: user.uid,
        photoURL: "",
        phoneNumber: "",
      });
      setLoading(false);
    } catch (err: any) {
      Alert.alert("Login error", err.message);
    }
  };

  return (
    <SafeAreaView style={tw`flex justify-center h-full `}>
      <View style={tw`justify-center`}>
        {/* White Overlay */}
        <View />
        {/* Title */}
        <Text style={tw`text-center mb-3 text-sm`}>Fill the Details</Text>
        <SafeAreaView style={tw`px-3`}>
          {/* Input Fields */}
          <TextInput
            style={tw`mb-4 border h-12`}
            placeholder="Enter name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={tw`mb-4 border h-12`}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={tw`mb-4 border h-12`}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Signup Button */}
          <TouchableOpacity onPress={onHandleSignup}>
            <Text style={tw`text-center text-lg`}>
              {!loading ? "Sign Up" : "Loading ..."}
            </Text>
          </TouchableOpacity>
          {/* Navigation to Login Screen */}
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => nav.navigate("Login")}>
              <Text
                style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* StatusBar */}
        <StatusBar barStyle="light-content" />
      </View>
    </SafeAreaView>
  );
}
