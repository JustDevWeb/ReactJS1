import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button,Dialog, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";

import {Delete} from "@mui/icons-material";

import {addChatWithFb, deleteChatWithFb, initTrackerWithFB} from "../store/middleware";


const ChatsList = ()=>{
    const dispatch = useDispatch();
    const chats = useSelector(state=>state.chats.chatList);
    const {chatId} = useParams();
    const [newChatName,setNewChatName]=useState('')
    const [visible,setVisible]=useState(false);

    const handleChange=(e)=>{setNewChatName(e.target.value)};

    const handleClose = ()=>{
        setVisible(false)
    };
    const handleOpen = ()=>{
    setVisible(true)
    };


    const handleDelete=(id)=>{
       dispatch(deleteChatWithFb(id));
    }
    const onAddChat=()=>{
        dispatch(addChatWithFb(newChatName));
        setNewChatName('');
        handleClose();
    };

    useEffect(()=>{
        dispatch(initTrackerWithFB());
    },[])

    return (
      <div style={{padding:'10px'}} className={"chats-list"} >
        {chats.map((chat, index) => (
          <div key={index} className={"chat-list-item"} style={{borderBottom:"1px solid black" , width:"200px", padding:"5px"}} >
            <Link to={`/chats/${chat.id}`} style={{display:"flex", justifyContent:"space-between", alignItems:"center" }} >
              <b style={{ color: chat.id === chatId ? "blue" : "gray" }}>
                {chat.name}
              </b>
              <button className={"chat-list-item-button"} style={{padding:"0",width:"30px",display:"flex", alignItems:"center", justifyContent:"center"}}
                onClick={() => {
                  handleDelete(chat.id);
                }}
              >
                <Delete fontSize={"small"} />
              </button>
            </Link>
            {/*<Chip component={Link} to={`/chats/${chat.id}`} clickable label={chat.name} onDelete={()=>{handleDelete(index)}} />*/}
          </div>
        ))}

        <div>
          <Button onClick={handleOpen}>Add Chat</Button>
          <Dialog open={visible} onClose={handleClose}>
            <DialogTitle>Please,enter the chat name</DialogTitle>
            <div className={"chat-name-box"}>
              <TextField value={newChatName} onChange={handleChange} />
              <Button onClick={onAddChat} disabled={!newChatName}>
                Add Chat
              </Button>
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
    );
}

export default ChatsList;

// ))}