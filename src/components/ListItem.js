import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text } from "react-native-elements";
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

        <Text>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  avatar: {
    margin: 10,
  },
  content: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
  },
  username: {
    color: "grey",
  },
});
export default ListItem;
