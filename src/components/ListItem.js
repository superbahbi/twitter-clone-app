import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text, Icon } from "react-native-elements";
import moment from "moment";
import useDeleteTweet from "../hooks/useDeleteTweet";
import useLikeTweet from "../hooks/useLikeTweet";
const ListItem = ({
  avatar,
  _id,
  userId,
  username,
  name,
  content,
  timestamp,
  likes,
  user,
}) => {
  const [deleteTweet] = useDeleteTweet();
  const [likeTweet] = useLikeTweet();

  function userlike(likes) {
    let status = false;
    Object.keys(likes).map((key, index) => {
      if (likes[key]._id === user._id) {
        status = true;
      }
      return null;
    });
    return status;
  }
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: avatar,
          }}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.username}>{`@${username}`} </Text>
          <Text style={styles.username}>· {moment(timestamp).fromNow()} </Text>
        </View>
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>

        <View style={styles.social}>
          <Icon
            name="comment"
            type="evilicon"
            color="darkgrey"
            onPress={() => console.log("hello")}
          />
          <Icon
            name="retweet"
            type="evilicon"
            color="darkgrey"
            onPress={() => console.log("hello")}
          />
          <TouchableOpacity onPress={() => likeTweet(_id)}>
            <Icon
              name="heart"
              type="evilicon"
              color={userlike(likes) ? "red" : "darkgrey"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share-google" type="evilicon" color="darkgrey" />
          </TouchableOpacity>
          {userId === user._id ? (
            <TouchableOpacity onPress={() => deleteTweet(_id)}>
              <Icon name="trash" type="evilicon" color="darkgrey" />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "whitesmoke",
    borderBottomWidth: 1,
    marginTop: 10,
  },
  avatar: {
    margin: 10,
  },
  content: {
    margin: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    marginBottom: 10,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  username: {
    color: "darkgrey",
  },
  social: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 70,
  },
});
export default ListItem;
