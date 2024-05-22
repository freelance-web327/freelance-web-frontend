import ChatInput from "./ChatInput";

const ChatWindow = () => {
  return (
    <div className="w-3/4 bg-white flex flex-col">
      <div className="flex-grow p-4">
        <div className="mb-4">
          <div className="text-right">
            <div className="inline-block bg-[#dcddde]  rounded-lg px-4 py-2">
              Hello send project images
            </div>
            <div className="text-gray-500 text-sm mt-1">12:00</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-end">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0">
              <img
                src="https://via.placeholder.com/40"
                alt="Nafisa"
                className="rounded-full"
              />
            </div>
            <div className="ml-2">
              <div className="inline-block bg-[#6663e7] rounded-lg px-4 py-2">
                okay
              </div>
              <div className="text-gray-500 text-sm mt-1">00:52</div>
            </div>
          </div>
          <div className="text-gray-500 text-sm mt-1">Nafisa</div>
        </div>
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
