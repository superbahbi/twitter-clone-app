import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import NavLink from "../components/NavLink";
const LandingScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          See what's happening in the world right now.
        </Text>
        <Button
          buttonStyle={styles.button}
          title="Create Account"
          onPress={() => navigation.navigate("Signup")}
        />

        <NavLink
          style={styles.navlink}
          routeName="Signin"
          text="Have an account already? Log in"
        />
      </View>
    </>
  );
};
LandingScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    borderRadius: 50,
    color: "black",
  },
  navlink: {},
});
export default LandingScreen;
