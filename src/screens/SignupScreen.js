import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      {/* <AuthForm
        headerText="Create your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup}
      /> */}
      <View>
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="paw"
          size={24}
          color="#1DA1F2"
        />
      </View>
      <View>
        <Text style={styles.title}>Create your account</Text>
      </View>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <View>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View>
        <Text style={styles.agreement}>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use. Others will be able to find you by email or
          phone number when provided Privacy Options
        </Text>

        <Button
          buttonStyle={styles.signUpButton}
          title="Sign up"
          onPress={() => signup({ username, password, email, name })}
        />
      </View>

      <NavLink routeName="Signin" text="Do you have an account? Sign in here" />
    </View>
  );
};
SignupScreen.navigationOptions = () => {
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
  agreement: {
    fontSize: 14,
    color: "grey",
  },
  signUpButton: {
    color: "#1DA1F2",
    borderRadius: 50,
    marginTop: 5,
  },
});
export default SignupScreen;
