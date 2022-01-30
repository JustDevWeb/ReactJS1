import React from "react";
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

function Routers() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Router>
        <div>
        <Box sx={{display: 'flex'}}>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab icon={<HomeIcon />} label="HOME" component={Link} to='/'/>
            <Tab icon={<ChatIcon />} label="CHATS" component={Link} to='/chats'/>
            <Tab icon={<AccountBoxIcon />} label="PROFILE" component={Link} to='/profile'/>
        </Tabs>
        </Box>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/chats/:chatId' element={<Chats/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='*' element={<NoChats/>}/>
            </Routes>
        </div>
        </Router>
    );
}

export default Routers;