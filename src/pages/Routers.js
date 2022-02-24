import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";
import MenuLogo from "../assets/navlogo.png";
import Home from "./Home";
import ChatsDisplay from "./ChatsDisplay";
import Profile from "./Profile";
import NoChats from "./Nochats";
import Gists from "./Gists";
import RequiredAuth from "../hocs/RequiredAuth";
import Login from "./Login";
import SignUp from "./SignUp";
import useAuth from "../hooks/useAuth";
import Button from "@mui/material/Button";
import { Logout } from "@mui/icons-material";

function Routers() {
  const [value, setValue] = React.useState(false);
  const auth = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1140px",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Link className={"logo-link"} to={"/"}>
          <img className={"nav-logo"} src={MenuLogo} alt={"menu-logo"} />
          <h3>Messenger</h3>
        </Link>
        <Tabs
          sx={{ marginLeft: "20%", marginRight: "auto" }}
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          selectionFollowsFocus
        >
          <Tab className={"tab"} label="HOME" component={Link} to="/" />
          <Tab className={"tab"} label="CHATS" component={Link} to="/chats" />
          <Tab
            className={"tab"}
            label="PROFILE"
            component={Link}
            to="/profile"
          />
          <Tab className={"tab"} label="GISTS" component={Link} to="/gists" />
          <Tab
            className={"tab"}
            label="Sign up"
            component={Link}
            to="/signup"
          />
          <Tab className={"tab"} label="Login" component={Link} to="/login" />
          <Tab className={"tab"} label="Sign out" />
        </Tabs>
        <Button
          onClick={() => auth.signout(() => {})}
          variant={"contained"}
          endIcon={<Logout />}
        >
          Logout
        </Button>
      </Box>
      <Routes>
        <Route exact element={<Home />} />

        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route element={<RequiredAuth />}>
          <Route path="/chats/" exact element={<NoChats />} />
          <Route path="/chats/:chatId" element={<ChatsDisplay />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gists" element={<Gists />} />
        </Route>
        <Route path="*" element={<NoChats />} />
      </Routes>
    </Router>
  );
}

export default Routers;
