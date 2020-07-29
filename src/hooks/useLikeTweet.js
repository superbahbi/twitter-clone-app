import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
export default () => {
  const { likeTweet, reset } = useContext(TweetContext);
  const likeTweetObj = async (_id) => {
    await likeTweet(_id);
    reset();
  };
  return [likeTweetObj];
};
