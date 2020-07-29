import { useContext } from "react";
import { Context as MessageContext } from "../context/MessageContext";
import { navigate } from "../navigationRef";
export default () => {
  const {
    // state: { id },
    createChatRoom,
    reset,
  } = useContext(MessageContext);

  const MakeChatRoom = async (_id) => {
    await createChatRoom(_id);
    reset();
  };
  return [MakeChatRoom];
};
