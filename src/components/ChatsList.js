import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Dialog, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";
import Button from "@mui/material/Button";
import {addChat} from "../store/chats/actions";

const ChatsList = ()=>{
    const dispatch = useDispatch();
    const chats = useSelector(state=>state.chats.chatList);
    const {chatId} = useParams();
    const [newChatName,setNewChatName]=useState('')
    const [visible,setVisible]=useState(false);
    const handleClose = ()=>{
        setVisible(false)
    };
    const handleOpen = ()=>{
    setVisible(true)
    };

    const handleChange=(e)=>{setNewChatName(e.target.value)};
    const onAddChat=()=>{
        dispatch(addChat(newChatName));
        setNewChatName('');
        handleClose();
    };

    return(
        <div className={'chats-list'} >

            {chats.map((chat,index)=>(
                <div key={index}>

                    <Link to={`/chats/${chat.id}`}><b style={{ color: chat.id === chatId ? "black" : "green" }}>{chat.name}</b></Link>
                </div>
            ))}

            <div>
                <Button onClick={handleOpen}>Add Chat</Button>
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Please,enter the chat name</DialogTitle>
                    <div className={'chat-name-box'}>
                        <TextField value={newChatName} onChange={handleChange}/>
                        <Button onClick={onAddChat} disabled={!newChatName}>Add Chat</Button>
                    </div>
                </Dialog>
            </div>
                {/*{Object.keys(chats).map((id,index)=>(*/}

                {/*<Link key={index} to={`/chats/${id}`}>*/}
                {/*    <b style={{ color: id === chatId ? "#000000" : "grey" }}>*/}
                {/*        {chats[id].name}*/}
                {/*    </b>*/}
                {/*</Link>*/}


        </div>
    )
}

export default ChatsList;

// ))}