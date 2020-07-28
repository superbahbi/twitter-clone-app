import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Card } from "react-native-elements";
import MenuHeader from "../components/MenuHeader";
import { Icon } from "react-native-elements";
const MessageScreen = ({ navigation }) => {
  const { state } = useContext(TweetContext);
  const users = [
    {
      name: "Jee",
      avatar_url:
        "https://res.cloudinary.com/dlz6xmn1q/image/upload/v1592350366/avatar/gladys-crop_bld7u3.png",
    },
    {
      name: "Jee",
      avatar_url:
        "https://res.cloudinary.com/dlz6xmn1q/image/upload/v1592350366/avatar/gladys-crop_bld7u3.png",
    },
  ];
  return (
    <View style={styles.container}>
      <MenuHeader user={state.user} title="Messages" />
      <View style={styles.tweet}>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Icon reverse name="addfile" type="antdesign" color="#1DA1F2" />
        </TouchableOpacity>
      </View>
      <Card containerStyle={styles.card}>
        {users.map((u, i) => {
          return (
            <ListItem
              containerStyle={styles.list}
              key={i}
              roundAvatar
              title={u.name}
              leftAvatar={{ source: { uri: u.avatar_url } }}
              bottomDivider
            />
          );
        })}
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 0,
    margin: 0,
  },
  list: {},
  tweet: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },
});
export default MessageScreen;
