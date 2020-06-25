import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
export default () => {
  const { deleteTweet } = useContext(TweetContext);
  const removeTweet = async (_id) => {
    await deleteTweet(_id);
  };
  return [removeTweet];
};
