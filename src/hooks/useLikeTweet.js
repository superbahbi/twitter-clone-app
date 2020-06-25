import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { navigate } from "../navigationRef";
export default () => {
  const { likeTweet, reset } = useContext(TweetContext);
  const likeTweetObj = async (_id) => {
    await likeTweet(_id);
    reset();
    navigate("Tweet");
  };
  return [likeTweetObj];
};
