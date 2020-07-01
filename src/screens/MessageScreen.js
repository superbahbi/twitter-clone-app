import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const MessageScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Text</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default MessageScreen;
