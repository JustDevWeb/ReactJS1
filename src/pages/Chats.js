import {useParams} from "react-router-dom";
import MessageList from "../components/MessageList";
import ChatsList from "../components/ChatsList";
import NoChats from "./Nochats";


const Chats = ({chats})=>{

    let {chatId}=useParams();

    return  (
        <div className={'container'}>
        <div className={'chats'}>
            {chats[chatId] ? <>
            <ChatsList chats={chats} chatId={chatId}/>
            <MessageList messages={chats[chatId].messages}/>
            </>:
                <><h3>Chat not found:(</h3>
                <ChatsList chats={chats} chatId={chatId}/></>

            }
        </div>
        </div>
    )
}

export default Chats