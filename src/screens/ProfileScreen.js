import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text, Image, Avatar, Divider } from "react-native-elements";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import ListItem from "../components/ListItem";
import moment from "moment";
import { Context as TweetContext } from "../context/TweetContext";
const ProfileScreen = () => {
  const { state, fetchProfileTweet } = useContext(TweetContext);
  const { profile, username, followers, following } = state.user;

  return (
    <ScrollView>
      <NavigationEvents onWillFocus={() => fetchProfileTweet(username)} />
      <Image
        source={{ uri: profile ? profile.cover.filename : null }}
        style={styles.cover}
      />
      <Avatar
        rounded
        size="large"
        source={{
          uri: profile ? profile.avatar.filename : null,
        }}
        containerStyle={styles.avatar}
      />
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
        <Text style={styles.location}>
          <EvilIcons name="location" size={16} />
          {profile.location}
        </Text>
        <Text style={styles.regDate}>
          <MaterialIcons name="date-range" size={16} />
          {" " + moment.unix(profile.regDate).format("MMMM YYYY")}
        </Text>
        <Text style={styles.follow}>
          {followers ? followers.length : 0}{" "}
          <Text style={styles.followers}>Followers </Text>
          {following ? following.length : 0}{" "}
          <Text style={styles.following}>Following </Text>
        </Text>
      </View>
      <Divider />
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
    </ScrollView>
  );
};
ProfileScreen.navigationOptions = {
  tabBarOptions: {
    showLabel: false,
  },
  tabBarIcon: <Feather name="mail" size={30} color="#636E72" />,
};
const styles = StyleSheet.create({
  container: {},
  cover: {
    width: "100%",
    height: 100,
  },
  avatar: {
    marginLeft: 20,
    marginTop: -40,
    borderWidth: 3,
    borderColor: "white",
    borderStyle: "solid",
  },
  profileInfo: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  bio: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 21,
  },
  username: {
    color: "#657786",
  },
  location: {
    color: "#657786",
  },
  regDate: {
    color: "#657786",
  },
  follow: {
    fontSize: 16,
  },
  followers: {
    marginRight: 10,
  },
  following: {},
});
export default ProfileScreen;
