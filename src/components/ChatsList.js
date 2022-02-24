import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Button,Dialog, DialogTitle, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {addChat, deleteChat} from "../store/chats/actions";
import {Delete} from "@mui/icons-material";
import {getDatabase,ref,push,set,get,child,remove} from 'firebase/database'
import firebase from "../services/firebase";


const ChatsList = ()=>{
    // const dispatch = useDispatch();
    // const chats = useSelector(state=>state.chats.chatList);
    const {chatId} = useParams();
    const [chats,setChats]=useState([]);
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
        const db = getDatabase(firebase);
        const chatRef = ref(db,`/chats/${id}`);
        const messageRef = ref(db,`/messages/${id}`);
        remove(chatRef).then(res=>console.log(res));
        remove(messageRef).then(res=>console.log(res));
    }
    const onAddChat=()=>{
        const db = getDatabase(firebase);
        const chatRef = ref(db,'/chats');
        const newChatRef = push(chatRef);
        set(newChatRef,{name:newChatName}).then((res)=>{console.log(res)})
        // dispatch(addChat(newChatName));
        setNewChatName('');
        handleClose();
    };

    useEffect(()=>{
        const db = getDatabase(firebase);
        const dbRef = ref(db);
        get (child(dbRef,'/chats')).then((snapshot)=>{
            if(snapshot.exists()) {
                const objVal = snapshot.val();
                const chatIds = Object.keys(objVal);
                const chatArr = chatIds.map(item=>({id: item, name:objVal[item].name}));
                setChats(chatArr);
            } else {
                console.log('no-data');
            }
        })
    },[])

    return (
      <div style={{padding:'10px'}} className={"chats-list"} >
        {chats.map((chat, index) => (
          <div key={index} >
            <Link to={`/chats/${chat.id}`}>
              <b style={{ color: chat.id === chatId ? "black" : "green" }}>
                {chat.name}
              </b>
              <button
                onClick={() => {
                  handleDelete(chat.id);
                }}
              >
                <Delete />
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