import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Platform,
} from "react-native";
import { Icon, Header, Button, Avatar, Image } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import { Context as TweetContext } from "../context/TweetContext";
import * as ImagePicker from "expo-image-picker";
import useSaveTweet from "../hooks/useSaveTweet";
const AddTweetScreen = ({ navigation }) => {
  const {
    state: { newTweet, newFile, user },
    createTweet,
    addTweet,
    addNewFile,
  } = useContext(TweetContext);

  const [saveTweet] = useSaveTweet();
  const [preview, setPreview] = useState({});

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    openImagePickerAsync;
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 5],
      base64: true,
    });

    if (pickerResult.cancelled === true) {
      return;
    }

    setPreview({ localUri: pickerResult.uri });

    let base64Img = `data:image/jpg;base64,${pickerResult.base64}`;

    addNewFile({
      file: base64Img,
      upload_preset: "insert your upload preset here,within quotations",
    });
  };

  return (
    <ScrollView style={styles.container}>
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
            onPress={saveTweet}
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
              uri: user ? user.profile.avatar.filename : null,
            }}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            style={styles.input}
            value={newTweet}
            onChangeText={addTweet}
            autoFocus={true}
            placeholder="What's Happening?"
            multiline={true}
            numberOfLines={4}
          />
        </View>
      </View>
      <View>
        <Image
          source={{ uri: preview.localUri }}
          style={styles.image}
          // PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.attachment}>
          <Icon
            name="image"
            type="evilicon"
            color="#517fa4"
            onPress={openImagePickerAsync}
            value={newFile}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
  },
  avatar: {
    margin: 20,
  },
  button: {
    color: "#1DA1F2",
    borderRadius: 50,
    width: 80,
  },
  textInput: {
    flex: 1,
    fontSize: 30,
    marginRight: 10,
  },
  input: {
    fontSize: 20,
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
  image: {
    aspectRatio: 4 / 5,
  },
});
export default AddTweetScreen;
