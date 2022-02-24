import LogoPerson from "../assets/logoperson.png";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
// import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import LogoBot from "../assets/logobot.png";
import { useParams } from "react-router-dom";
import { getDatabase, get, ref, child } from "firebase/database";
import firebase from "../services/firebase";

const MessageList = () => {
  const profileName = useSelector((state) => state.profile.name);
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const db = getDatabase(firebase);
    const dbRef = ref(db);
    get(child(dbRef, `/messages/${chatId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        const msg = Object.values(snapshot.val());
        setMessages(msg);
      } else {
        console.error("error");
      }
    });
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  }, [chatId]);

  const renderMessage = useCallback(
    (message, index) => {
      return (
        <ListItem
          sx={{
            padding: "0",
            border: "0",
            borderRadius: "10px",
            backgroundColor: "#bbd9e7",
          }}
          className={`messageBox ${
            message.author === profileName ? "user" : "bot"
          }`}
          key={index}
        >
          <ListItemAvatar>
            <Avatar
              alt="logo"
              src={message.author === profileName ? LogoPerson : LogoBot}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontSize: "13px" }}
                  component="p"
                  variant="body1"
                  color="text.primary"
                >
                  {message.text}
                </Typography>
              </React.Fragment>
            }
            secondary={
              <Box component={"span"} className={"message-info"}>
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px" }}
                    component="span"
                    variant="caption"
                    color="#0022ff"
                  >
                    {message.author}
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontSize: "12px" }}
                    component="span"
                    variant="caption"
                    color="red"
                  >
                    {message.date}
                  </Typography>
                </React.Fragment>
              </Box>
            }
          />
        </ListItem>
      );
    },
    [profileName]
  );

  return (
    <div>
      <List
        className={"chat-box"}
        // sx={{
        //   width: "100%",
        //   maxWidth: 360,
        //   bgcolor: "background.paper",
        //   margin: "0",
        //   padding: "0",
        //   display: "flex",
        //   flexDirection: "column"
        // }}
      >
        {messages.map((message, index) => renderMessage(message, index))}
        <div ref={messagesEndRef} />
      </List>
    </div>
  );
};
export default MessageList;
