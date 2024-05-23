import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../../features/actions/chatThunks";

/**
 * Chat input component for sending messages.
 * @returns {JSX.Element} Chat input component.
 */
const ChatInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const selectedChat = useSelector((state) => state.chat.selectedChat);

  const handleSendMessage = () => {
    if (selectedChat && message.trim()) {
      dispatch(
        sendMessage(selectedChat._id, { userId: "currentUserId", message })
      );
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center">
      <input
        type="text"
        placeholder="Enter Message..."
        className="flex-grow px-4 py-2 rounded-md border border-gray-300 mr-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
        onClick={handleSendMessage}
      >
        👍
      </button>
    </div>
  );
};

export default ChatInput;
