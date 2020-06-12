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
      <Text>MessageScreen</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
};
MessageScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
});
export default MessageScreen;
