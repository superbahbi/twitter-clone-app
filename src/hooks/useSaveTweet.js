import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { navigate } from "../navigationRef";
export default () => {
  const {
    state: { newTweet, newFile },
    createTweet,
    reset,
  } = useContext(TweetContext);

  const saveTrack = async () => {
    await createTweet({ newTweet, newFile });
    reset();
    navigate("Tweet");
  };
  return [saveTrack];
};
