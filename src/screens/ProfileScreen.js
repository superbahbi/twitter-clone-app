import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={signout} />
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
