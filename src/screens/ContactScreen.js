import React, { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Button, Card, ListItem } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
const ContactScreen = ({ navigation }) => {
  const { state } = useContext(TweetContext);

  return (
    <View>
      <Card containerStyle={styles.card}>
        {state.user.following.map((u, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("Chat", { name: u.name, data: u })
              }
            >
              <ListItem
                containerStyle={styles.list}
                key={i}
                roundAvatar
                title={u.name}
                subtitle={u.username}
                leftAvatar={{ source: { uri: u.avatar } }}
                bottomDivider
              />
            </TouchableOpacity>
          );
        })}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    padding: 0,
    margin: 0,
  },
  list: {},
});
export default ContactScreen;
