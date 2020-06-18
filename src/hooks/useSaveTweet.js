import { useContext } from "react";
import { Context as TweetContext } from "../context/TweetContext";
import { navigate } from "../navigationRef";
export default () => {
  const {
    state: { newTweet },
    createTweet,
    reset,
  } = useContext(TweetContext);

  const saveTrack = async () => {
    await createTweet(newTweet);
    reset();
    navigate("Tweet");
  };
  return [saveTrack];
};
