import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  Keyboard,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import tw from "twrnc";
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from "@react-navigation/native";

interface LoginProps {}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const nav: NavigationProp<ParamListBase> = useNavigation();
  const secondInput: any = useRef(null);
  const firstInput = useRef(null);

  useEffect(() => {
    if (loading === false && email && password) {
      nav.navigate("Home");
    }
  }, [loading, nav]);

  function onHandleLogin() {
    setLoading(true);
    if (email !== "" && password !== "") {
      return signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Login success");
        })
        .catch((err) => {
          Alert.alert("Login error", err.message);
          setError(err.message);
        })
        .finally(() => {
          // login stays false on success or failure
          setLoading(false);
        });
    }
  }

  return (
    <SafeAreaView style={tw`flex justify-center h-full `}>
      <View>
        {/* Background Image */}
        <View />
        {/* Title */}
        <Text style={tw`text-center mb-3 text-sm`}>Log In</Text>
        <SafeAreaView style={tw`px-3`}>
          {/* Input Fields */}
          <TextInput
            style={tw`mb-4 border h-12`}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            textContentType="emailAddress"
            autoFocus={true}
            ref={firstInput}
            onSubmitEditing={() => secondInput.current.focus()}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={tw`mb-4 border h-12`}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            ref={secondInput}
            secureTextEntry={true}
            returnKeyType="done"
            textContentType="password"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {/* Login Button */}
          <TouchableOpacity onPress={onHandleLogin}>
            <Text style={tw`text-center text-lg`}>
              {" "}
              {!loading ? "Log In" : "Loading..."}
            </Text>
          </TouchableOpacity>
          {/* Navigation to Signup Screen */}
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
            <TouchableOpacity onPress={() => nav.navigate("Signup")}>
              <Text
                style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}
              >
                Sign Up
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
