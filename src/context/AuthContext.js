import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import tweetApi from "../api/tweetApi";
import formurlencoded from "form-urlencoded";
import { navigate } from "../navigationRef";
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("Tweet");
  } else {
    navigate("loginFlow");
  }
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};
const signup =
  (dispatch) =>
  async ({ username, password, email, name }) => {
    try {
      const response = await tweetApi.post(
        "/api/signup",
        formurlencoded({
          username,
          password,
          email,
          name,
        })
      );
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("Tweet");
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ username, password }) => {
    try {
      const response = await tweetApi.post(
        "/api/login",
        formurlencoded({
          username,
          password,
        })
      );
      await AsyncStorage.setItem("token", response.data.token);
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch({
        type: "signin",
        payload: { token: response.data.token, user: response.data.user },
      });
      navigate("Tweet");
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  await AsyncStorage.removeItem("pushtoken");
  dispatch({ type: signout });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin },
  { token: null, user: null, errorMessage: "" }
);
