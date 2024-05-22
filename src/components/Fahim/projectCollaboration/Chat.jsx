import ChatSidebar from "./chatComponents/ChatSidebar";
import ChatWindow from "./chatComponents/ChatWindow";

export default function Chat() {
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
}
