import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const NotificationScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>NotificationScreen</Text>
    </SafeAreaView>
  );
};
NotificationScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="bell" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
});
export default NotificationScreen;
