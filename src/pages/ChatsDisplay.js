import MessageList from "../components/MessageList";
import ChatsList from "../components/ChatsList.js";
import ControlPanel from "../components/ControlPanel";

const ChatsDisplay = () => {
  return (
    <div className={"container"}>
      <div className={"chats"}>
        <ChatsList />
        <div className={"widget-box"}>
          <MessageList />
          <ControlPanel />
        </div>
      </div>
    </div>
  );
};

export default ChatsDisplay;