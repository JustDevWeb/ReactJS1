import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import {Tabs,Tab,Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuLogo from "../navlogo.png"
import Home from './Home';
import ChatsDisplay from './ChatsDisplay';
import Profile from './Profile';
import NoChats from "./Nochats";




function Routers() {
    const [value, setValue] = React.useState(0);

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
          <Route path="/" exact element={<Home />} />
          <Route path="/chats/:chatId" element={<ChatsDisplay  />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoChats  />} />
        </Routes>
      </Router>
    );
}

export default Routers;