import {useState} from "react";
import {useParams} from "react-router-dom";
import MessageList from "../components/MessageList";
import ChatsList from "../components/ChatsList";

const initialChats={
    id1: {
        name:'Chat 1', messages:[{
            text:'Message 1 from chat 1',
            author:'bot'
        }]
    },
    id2: {
        name:'Chat 2', messages:[{
            text:'Message 2 from chat 2',
            author:'me'
        }]
    }
}


const Chats = ()=>{
    const [chatList,setChatList]=useState(initialChats);
    let {chatId}=useParams();
    return (
        <div className={'chats'}>
            <ChatsList chatsList={chatList} chatId={chatId}/>
            <MessageList messageList={chatList[chatId].messages}/>
        </div>
    )
}
// {Object.keys(chatList).map((chatId,index)=>(
//     <div key={index}>{chatList[chatId].name}</div>
// ))}
export default Chats