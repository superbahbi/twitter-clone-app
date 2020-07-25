import Constants from "expo-constants";
// import { Notifications } from "expo";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";
import axios from "axios";

export default async () => {
  const PUSH_ENDPOINT = "http://rallycoding.herokuapp.com/api/tokens";
  let previousToken = await AsyncStorage.getItem("pushtoken");
  if (previousToken) {
    return;
  } else {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = await Notifications.getExpoPushTokenAsync();
    } else {
      alert("Must use physical device for Push Notifications");
    }
    await axios.post(PUSH_ENDPOINT, { token: { token } });
    await AsyncStorage.setItem("pushtoken", token.data);
  }
};
