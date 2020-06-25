import React, { useContext } from "react";

import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import { DrawerActions } from "react-navigation-drawer";
import { withNavigation } from "react-navigation";
const MenuHeader = ({ user, navigation }) => {
  const { profile } = user;
  return (
    <View>
      <Header
        barStyle="light-content"
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            <Avatar
              rounded
              size="small"
              source={{
                uri: profile ? profile.avatar.filename : null,
              }}
            />
          </TouchableOpacity>
        }
        centerComponent={<FontAwesome5 name="paw" size={20} color="#1DA1F2" />}
        rightComponent={<Feather name="star" size={20} color="#1DA1F2" />}
        containerStyle={{
          backgroundColor: "#fff",
          justifyContent: "space-around",
          height: 50,
          paddingTop: 0,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default withNavigation(MenuHeader);
