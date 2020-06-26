import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import { Context as TweetContext } from "../context/TweetContext";
import MenuHeader from "../components/MenuHeader";
const ProfileScreen = () => {
  const { state } = useContext(TweetContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <MenuHeader user={state.user} />
      <Text>Profile</Text>
    </SafeAreaView>
  );
};
ProfileScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
});
export default ProfileScreen;
