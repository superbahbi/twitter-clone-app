import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
// import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  //   const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View>
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="paw"
          size={24}
          color="#1DA1F2"
        />
      </View>
      <View>
        <Text style={styles.title}>Log in to Twitter</Text>
      </View>
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
      {/* <AuthForm
        headerText="Sign in for Tracker"
        // errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        // onSubmit={signin}
      /> */}

      <View>
        <Input
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <Button buttonStyle={styles.signInButton} title="Log in" />
      </View>
      <View>
        <NavLink
          routeName="Signup"
          text="Don't have an account? Sign up instead"
        />
      </View>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  signInButton: {
    color: "#1DA1F2",
    borderRadius: 50,
    marginTop: 5,
  },
});

export default SigninScreen;
