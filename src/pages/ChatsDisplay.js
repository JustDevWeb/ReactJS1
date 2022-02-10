import {useParams} from "react-router-dom";
import MessageList from "../components/MessageList";
import ChatsList from "../components/ChatsList";
import NoChats from "./Nochats";
import ControlPanel from "../components/ControlPanel";


const ChatsDisplay = ()=>{



    return  (
        <div className={'container'}>
        <div className={'chats'}>
            <ChatsList />
            <div className={"widget-box"}>
                <MessageList/>
                <ControlPanel/>
            </div>

        </div>
        </div>
    )
}

export default ChatsDisplay;