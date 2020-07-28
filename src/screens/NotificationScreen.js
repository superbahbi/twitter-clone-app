import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import MenuHeader from "../components/MenuHeader";
const NotificationScreen = () => {
  const { state } = useContext(TweetContext);

  return (
    <View>
      <MenuHeader user={state.user} title="Notifications" />
      <Text>NotificationScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default NotificationScreen;
