import createDataContext from "./createDataContext";
import tweetApi from "../api/tweetApi";
const tweetReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tweet":
      return { ...state, tweet: action.payload };
    case "fetch_user":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const fetchTweet = (dispatch) => async () => {
  const response = await tweetApi.get("/tweet");
  dispatch({ type: "fetch_tweet", payload: response.data });
};
const fetchUser = (dispatch) => async () => {
  const response = await tweetApi.get("/user");
  console.log(response.data);
  dispatch({ type: "fetch_user", payload: response.data });
};
const createTweet = (dispatch) => async (name, locations) => {
  await tweetApi.post("/tweet", { name, locations });
};
export const { Context, Provider } = createDataContext(
  tweetReducer,
  { fetchTweet, fetchUser, createTweet },
  { tweet: [], user: {} }
);
