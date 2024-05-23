import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatWindow from "./chatComponents/ChatWindow";
import { fetchUserChats } from "../../../features/actions/chatThunks";

/**
 * Main Chat component.
 * @returns {JSX.Element} Chat component.
 */
const Chat = () => {
  const dispatch = useDispatch();
  const userId = "currentUserId"; // Replace with the actual user ID

  useEffect(() => {
    dispatch(fetchUserChats(userId));
  }, [dispatch, userId]);

  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
};

export default Chat;
