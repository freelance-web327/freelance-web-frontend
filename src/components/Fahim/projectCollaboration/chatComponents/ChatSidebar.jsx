const ChatSidebar = () => {
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
        <div className="p-4 bg-gray-300 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                G
              </span>
              <span className="ml-4">General</span>
            </div>
            <span className="text-sm text-gray-500">2:06 min</span>
          </div>
          <div className="text-gray-500 mt-2">This theme is Awesome!</div>
        </div>
        <div className="p-4 bg-white rounded-md shadow-md">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
              D
            </span>
            <span className="ml-4">Designer</span>
          </div>
          <div className="text-gray-500 mt-2">
            Next meeting tomorrow 10.00AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
