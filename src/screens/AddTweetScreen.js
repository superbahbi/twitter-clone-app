import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Text, Icon, Header, Button, Avatar } from "react-native-elements";
import { Feather, EvilIcons } from "@expo/vector-icons";
const AddTweetScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        barStyle="light-content"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.navigate("mainFlow")}>
            <EvilIcons name="close" size={30} color="#1DA1F2" />
          </TouchableOpacity>
        }
        rightComponent={
          <Button
            buttonStyle={styles.button}
            title="Tweet"
            onPress={() => navigation.navigate("AddTweet")}
          />
        }
        containerStyle={{
          backgroundColor: "#fff",
          justifyContent: "space-around",
          height: 60,
          paddingTop: 0,
        }}
      />

      <View style={styles.inputContainer}>
        <View style={styles.avatar}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: "profile ? profile.avatar.filename : null",
            }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            autoFocus={true}
            placeholder="What's Happening?"
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.attachment}>
          <Icon
            name="image"
            type="evilicon"
            color="#517fa4"
            onPress={() => console.log("hello")}
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="gif"
            type="material"
            color="#517fa4"
            onPress={() => console.log("hello")}
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="graph-horizontal"
            type="foundation"
            color="#517fa4"
            onPress={() => console.log("hello")}
            containerStyle={styles.icon}
            size={40}
          />
          <Icon
            name="location"
            type="evilicon"
            color="#517fa4"
            onPress={() => console.log("hello")}
            containerStyle={styles.icon}
            size={40}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  avatar: {
    margin: 10,
  },
  button: {
    color: "#1DA1F2",
    borderRadius: 50,
    width: 80,
  },
  textInput: {
    flex: 1,
    borderColor: "red",
    borderWidth: 1,
    fontSize: 30,
    marginRight: 10,
  },
  attachment: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
  },
  icon: {
    marginRight: 20,
    fontSize: 30,
  },
});
export default AddTweetScreen;
