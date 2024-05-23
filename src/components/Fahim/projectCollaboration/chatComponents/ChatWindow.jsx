import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";

/**
 * Chat window component to display messages of the selected chat.
 * @returns {JSX.Element} Chat window component.
 */
const ChatWindow = () => {
  const selectedChat = useSelector((state) => state.chat.selectedChat);

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <span className="text-gray-500">Select a chat to start messaging</span>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedChat.messages.map((message) => (
          <div key={message._id} className="mb-4">
            <div className="font-semibold">{message.userId.name}</div>
            <div className="text-gray-700">{message.message}</div>
            <div className="text-gray-500 text-sm">
              {new Date(message.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
