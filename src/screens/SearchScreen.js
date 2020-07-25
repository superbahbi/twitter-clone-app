import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";
import MenuHeader from "../components/MenuHeader";
const SearchScreen = () => {
  const { state } = useContext(TweetContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <MenuHeader user={state.user} />
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default SearchScreen;
