import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Box} from "@mui/material";
import MenuLogo from "../logomsn.png"
import Home from './Home';
import Chats from './Chats';
import Profile from './Profile';
import NoChats from "./Nochats";
import Button from "@mui/material/Button";

const initialChats={
    id1: {
        name:'Chat 1', messages:[{
            text:'Message 1 from chat 1',
            author:'bot'}
        ]
    },
    id2: {
        name:'Chat 2', messages:[{
            text:'Message 2 from chat 2',
            author:'me'
        }]
    }

}

function Routers() {
    const [value, setValue] = React.useState(0);
    const [chatList,setChatList]=useState(initialChats);
    console.log(Object.keys(chatList)[Object.keys(chatList).length-1])

    // const updateChatList = ()=>{
    // setChatList((prevChatList)=>{
    //     prevChatList.id3 = {name: 'asdas', messages: [{
    //         text: 'Message3', author: 'test'
    //         }] }
        // let prevId = Object.keys(prevChatList)[Object.keys(prevChatList).length-1];
        // console.log(typeof prevId)
        // let newId=prevId.split('');
        // prevChatList[newId[newId.length-1]+1]= {name: `Chat ${newId[newId.length-1]+1}`, messages:[{
        //     text: 'Message 3 from chat 3',
        //         author: 'me'}]
        // }

    // })
    // }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <Router>
        <Box sx={{ display: "flex", maxWidth: "1140px", alignItems:'center',margin:'0 auto' }}>
                      <Link className={'logo-link'} to={"/"}>
            <img className={"nav-logo"} src={MenuLogo} alt={"menu-logo"} />
            <h3>Messenger</h3>

          </Link>
          <Tabs
            sx={{ marginLeft:'20%',marginRight:'auto' }}
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab className={'tab'} icon={<HomeIcon />}
                 label="HOME"
                 component={Link}
                 to="/" />
            <Tab className={'tab'}
              icon={<ChatIcon />}
              label="CHATS"
              component={Link}
              to="/chats"
            />
            <Tab className={'tab'}
              icon={<AccountBoxIcon />}
              label="PROFILE"
              component={Link}
              to="/profile"
            />
          </Tabs>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats/:chatId" element={<Chats chats={chatList} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoChats chats={chatList} />} />
        </Routes>
      </Router>
    );
}

export default Routers;