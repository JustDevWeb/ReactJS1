import ChatsList from "../components/ChatsList";
import {useParams} from "react-router-dom";

const NoChats = ({chats})=>{
    const {chatId}=useParams();
    return (
        <div className={'container'}><ChatsList chats={chats} chatId={chatId}/></div>
    )
}

export default NoChats;