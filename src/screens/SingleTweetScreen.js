import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import ListItem from "../components/ListItem";
import MenuHeader from "../components/MenuHeader";
const SingleTweetScreen = ({ navigation }) => {
  const { state } = useContext(TweetContext);
  const item = navigation.getParam("item");
  console.log(item);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity>
          <ListItem
            avatar={item.avatar}
            _id={item._id}
            userId={item.userId}
            username={item.username}
            name={item.name}
            content={item.content}
            timestamp={item.timestamp}
            likes={item.likes}
            user={state.user}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Comments here</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,

    borderColor: "red",
    borderWidth: 1,
  },
});

export default SingleTweetScreen;
