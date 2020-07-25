import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import ListItem from "../components/ListItem";
import { View, StyleSheet } from "react-native";
const SingleTweetScreen = ({ navigation }) => {
  const { state } = useContext(TweetContext);
  const data = navigation.getParam("item");

  return (
    <View style={styles.container}>
      <ListItem
        avatar={data.avatar}
        _id={data._id}
        userId={data.userId}
        username={data.username}
        name={data.name}
        content={data.content}
        image={data.img}
        timestamp={data.timestamp}
        likes={data.likes}
        user={state.user}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SingleTweetScreen;
