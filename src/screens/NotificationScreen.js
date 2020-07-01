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

const styles = StyleSheet.create({
  container: {},
});
export default NotificationScreen;
