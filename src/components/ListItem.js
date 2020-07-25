import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Avatar, Text, Icon, Image } from "react-native-elements";
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
  image,
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
      <View style={styles.rightContainer}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.username}>{`@${username}`} </Text>
          <Text style={styles.username}>· {moment(timestamp).fromNow()} </Text>
        </View>
        <View style={styles.content}>
          <Text>{content}</Text>
          {image ? (
            <Image
              source={{ uri: image.filename }}
              style={{ width: "100%", height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          ) : null}
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
  rightContainer: {
    flex: 1,
    marginTop: 10,
  },
  userInfo: {
    flexDirection: "row",
  },
  content: {
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
    marginBottom: 10,
  },
});
export default ListItem;
