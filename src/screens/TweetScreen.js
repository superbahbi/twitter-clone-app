import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { Context as TweetContext } from "../context/TweetContext";
import ListItem from "../components/ListItem";
import MenuHeader from "../components/MenuHeader";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Button, Avatar } from "react-native-elements";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const TweetScreen = () => {
  const { state, fetchTweet } = useContext(TweetContext);
  return (
    <>
      <NavigationEvents onWillFocus={fetchTweet} />
      <MenuHeader />
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate("TrackDetail", { _id: item._id })
            // }
            >
              <ListItem
                avatar={item.avatar}
                username={item.username}
                name={item.name}
                content={item.content}
              />
            </TouchableOpacity>
          );
        }}
      />
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
