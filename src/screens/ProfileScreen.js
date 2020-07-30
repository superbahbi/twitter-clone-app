import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image, Avatar, Divider } from "react-native-elements";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import { Context as TweetContext } from "../context/TweetContext";
const ProfileScreen = () => {
  const { state } = useContext(TweetContext);
  const { profile, username, followers, following } = state.user;
  console.log(state.user);
  return (
    <View>
      {/* <MenuHeader user={state.user} /> */}
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
    </View>
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
    // background-position: 0 50%;
    // background-size: 100% auto;
    // border-bottom: 1px solid #e1e8ed;
    // border-radius: 2px 2px 0 0;
    // width: 100%;
    // height: auto;
    // max-height: 200px;
    // object-fit: cover;
    // display: block !important;
    // z-index: 0;
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
