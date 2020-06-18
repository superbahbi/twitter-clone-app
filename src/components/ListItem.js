import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Icon } from "react-native-elements";
const ListItem = ({ avatar, username, name, content }) => {
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
        </View>
        <View style={styles.content}>
          <Text>{content}</Text>
        </View>

        <View style={styles.social}>
          <Icon name="comment" type="evilicon" color="darkgrey" />
          <Icon name="retweet" type="evilicon" color="darkgrey" />
          <Icon name="heart" type="evilicon" color="darkgrey" />
          <Icon name="share-google" type="evilicon" color="darkgrey" />
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
