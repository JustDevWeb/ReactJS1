import {useParams} from "react-router-dom";
import MessageList from "../components/MessageList";
import ChatsList from "../components/ChatsList";
import NoChats from "./Nochats";


const Chats = ({chats})=>{

    let {chatId}=useParams();

    return chats[chatId] ? (
        <div className={'chats'}>
            <ChatsList chats={chats} chatId={chatId}/>
            <MessageList messages={chats[chatId].messages}/>
        </div>
    ): <ChatsList/>
}

export default Chats