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
SearchScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="search" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
});
export default SearchScreen;