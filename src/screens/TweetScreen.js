import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { Context as TweetContext } from "../context/TweetContext";
import ListItem from "../components/ListItem";
import MenuHeader from "../components/MenuHeader";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

const TweetScreen = ({ navigation }) => {
  const { state, fetchTweet, fetchUser } = useContext(TweetContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <NavigationEvents onWillFocus={fetchUser} />
      <NavigationEvents onWillFocus={fetchTweet} />

      <MenuHeader user={state.user} />
      <FlatList
        data={state.tweet}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("SingleTweet", { item })}
            >
              <ListItem
                avatar={item.avatar}
                _id={item._id}
                userId={item.userId}
                username={item.username}
                name={item.name}
                content={item.content}
                image={item.img}
                timestamp={item.timestamp}
                likes={item.likes}
                user={state.user}
              />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.tweet}>
        <TouchableOpacity onPress={() => navigation.navigate("AddTweet")}>
          <Icon reverse name="addfile" type="antdesign" color="#1DA1F2" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
export default TweetScreen;
