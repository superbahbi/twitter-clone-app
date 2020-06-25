import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import { Context as TweetContext } from "../context/TweetContext";
import ListItem from "../components/ListItem";
import MenuHeader from "../components/MenuHeader";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const TweetScreen = ({ navigation }) => {
  const { state, fetchTweet, fetchUser } = useContext(TweetContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchUser} />
      <NavigationEvents onWillFocus={fetchTweet} />

      <MenuHeader user={state.user} />
      <FlatList
        data={state.tweet}
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
          );
        }}
      />
      <View style={styles.tweet}>
        <TouchableOpacity onPress={() => navigation.navigate("AddTweet")}>
          <Icon reverse name="addfile" type="antdesign" color="#1DA1F2" />
        </TouchableOpacity>
      </View>
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
  tweet: {
    //Here is the trick
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
