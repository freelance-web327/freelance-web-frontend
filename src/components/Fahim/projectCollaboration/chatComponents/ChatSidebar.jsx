import { useDispatch, useSelector } from "react-redux";
import { fetchUserChats } from "../../../../features/actions/chatThunks";

/**
 * Sidebar component for displaying chat list.
 * @returns {JSX.Element} Chat sidebar component.
 */
const ChatSidebar = () => {
  const chats = useSelector((state) => state.chat.chats);
  const dispatch = useDispatch();

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search messages or users"
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
      </div>
      <div className="space-y-4">
        {chats.map((chat) => (
          <div
            key={chat._id}
            className="p-4 bg-white rounded-md shadow-md"
            onClick={() => dispatch(fetchUserChats(chat))}
          >
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                {chat.participants[0].name[0]}
              </span>
              <span className="ml-4">
                {chat.participants.map((p) => p.name).join(", ")}
              </span>
            </div>
            <div className="text-gray-500 mt-2">
              {chat.messages.length > 0 &&
                chat.messages[chat.messages.length - 1].message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
