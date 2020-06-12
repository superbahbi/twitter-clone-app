import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";
const TweetScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Tweet</Text>
    </SafeAreaView>
  );
};
TweetScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="home" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
});
export default TweetScreen;
