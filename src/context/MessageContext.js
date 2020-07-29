import createDataContext from "./createDataContext";
import tweetApi from "../api/tweetApi";
const messageReducer = (state, action) => {
  switch (action.type) {
    case "fetch_message":
      return { ...state, message: action.payload };
    case "reset":
      return { ...state, newMessage: {} };
    default:
      return state;
  }
};
const fetchMessage = (dispatch) => async () => {
  const response = await tweetApi.get("/tweet");
  dispatch({ type: "fetch_message", payload: response.data });
};
const createChatRoom = (dispatch) => async (content) => {
  await tweetApi.post("/chatroom", { content });
};
const reset = (dispatch) => () => {
  dispatch({ type: "reset" });
};
export const { Context, Provider } = createDataContext(
  messageReducer,
  {
    fetchMessage,
    createChatRoom,
    reset,
  },
  { message: [], newMessage: {}, id: "" }
);
