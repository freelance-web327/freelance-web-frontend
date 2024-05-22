const ChatInput = () => {
  return (
    <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center">
      <input
        type="text"
        placeholder="Enter Message..."
        className="flex-grow px-4 py-2 rounded-md border border-gray-300 mr-2"
      />
      <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
        👍
      </button>
    </div>
  );
};

export default ChatInput;
