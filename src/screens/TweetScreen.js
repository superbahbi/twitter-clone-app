import React from "react";
import tweetApi from "../api/tweetApi";
import { View, StyleSheet, Image } from "react-native";
import {
  Text,
  Card,
  ListItem,
  Button,
  Icon,
  Header,
} from "react-native-elements";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const TweetScreen = () => {
  return (
    <>
      <Header
        barStyle="light-content"
        leftComponent={<Feather name="circle" size={20} color="#1DA1F2" />}
        centerComponent={<FontAwesome5 name="paw" size={20} color="#1DA1F2" />}
        rightComponent={<Feather name="star" size={20} color="#1DA1F2" />}
        containerStyle={{
          backgroundColor: "#fff",
          justifyContent: "space-around",
          height: 50,
          paddingTop: 0,
        }}
      />
      <Text>Tweet</Text>
      <Card containerStyle={styles.card}>
        <ListItem key={0} roundAvatar title="bahbi" avatar="none" />
      </Card>
    </>
  );
};
TweetScreen.navigationOptions = {
  headerShown: true,
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="home" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 0,
    margin: 0,
  },
});
export default TweetScreen;
