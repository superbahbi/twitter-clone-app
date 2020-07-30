import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableNativeFeedback,
  ColorPalette,
  Icon,
  Text,
} from "react-native";
import { Avatar, Divider } from "react-native-elements";
import { DrawerItems } from "react-navigation-drawer";
import { Context as TweetContext } from "../context/TweetContext";
import { NavigationEvents } from "react-navigation";
const Drawer = (props, user) => {
  const ripple = TouchableNativeFeedback.Ripple("#adacac", false);

  const { state, fetchUser } = useContext(TweetContext);
  const { profile, username, followers, following } = state.user;
  return (
    <View style={{ flex: 1 }}>
      <NavigationEvents onWillFocus={fetchUser} />
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.containHeader}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: profile ? profile.avatar.filename : null,
            }}
          />
          <Text style={styles.name}>{profile ? profile.name : null}</Text>
          <Text style={styles.username}>{`@${username}`}</Text>
          <Text style={styles.follow}>
            {following ? following.length : 0} Following{" "}
            {followers ? followers.length : 0} Followers{" "}
          </Text>
          <Divider style={styles.divider} />
        </View>
        <View>
          <DrawerItems labelStyle={styles.drawerItems} {...props} />
        </View>
        <View>
          <Divider style={styles.divider} />
          <Text style={styles.settings}>Settings and privacy</Text>
          <Text style={styles.settings}>Help Center</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  containHeader: {
    margin: 20,
  },
  name: {
    marginTop: 5,
    fontWeight: "bold",
  },
  username: {
    color: "darkgrey",
  },
  follow: {
    marginTop: 10,
    marginBottom: 10,
  },
  divider: {
    backgroundColor: "#777f7c90",
  },
  drawerItems: {
    fontSize: 15,
    fontWeight: "normal",
  },
  settings: {
    padding: 15,
  },
});
export default Drawer;
