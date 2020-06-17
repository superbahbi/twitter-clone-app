import React, { useContext } from "react";

import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
const MenuHeader = () => {
  // const { state } = useContext(AuthContext);
  // const { user } = state;
  // console.log(user.profile.avatar.filename);
  return (
    <View>
      <Header
        barStyle="light-content"
        leftComponent={
          <Avatar
            rounded
            size="small"
            source={{
              uri: "user.profile.avatar.filename",
            }}
          />
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
export default MenuHeader;
