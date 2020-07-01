import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";
const SearchScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>SearchScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default SearchScreen;
