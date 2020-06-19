import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { navigate } from "../navigationRef";
export default () => {
  const { deleteTweet, reset } = useContext(TweetContext);
  const removeTweet = async (_id) => {
    await deleteTweet(_id);
    reset();
    navigate("Tweet");
  };
  return [removeTweet];
};
