import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const SignoutScreen = () => {
  const { signout } = useContext(AuthContext);
  signout();
  return <></>;
};
export default SignoutScreen;
