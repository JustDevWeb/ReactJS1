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
import Home from './Home';
import Chats from './Chats';
import Profile from './Profile';
import NoChats from "./Nochats";

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
        <div>
        <Box sx={{display: 'flex',justifyContent:'space-between',width:'100%'}}>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<HomeIcon />} label="HOME" component={Link} to='/'/>
            <Tab icon={<ChatIcon />} label="CHATS" component={Link} to='/chats'/>
            <Tab icon={<AccountBoxIcon />} label="PROFILE" component={Link} to='/profile'/>
        </Tabs>
        </Box>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/chats/:chatId' element={<Chats chats={chatList}/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<NoChats chats={chatList} />}/>
            </Routes>
        </div>
        </Router>
    );
}

export default Routers;