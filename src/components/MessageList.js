import LogoPerson from '../logoperson.png'
import {List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography} from "@mui/material";
import React, {useCallback, useEffect, useRef, useState} from "react";
// import Divider from "@mui/material/Divider";
import {useSelector} from "react-redux";
import LogoBot from '../logobot.png';
import {useParams} from "react-router-dom";



const MessageList=() => {
const profileName = useSelector( state=>state.profile.name);
const messages = useSelector(state=> state.messages.messageList);
const {chatId} = useParams();
const messagesEndRef = useRef(null);
const getMessagesById = messages[chatId];

useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "auto" });
            });

const renderMessage = useCallback((message,index)=>{ return (
  <ListItem
    sx={{
        padding:"0",
        border:"0",
        borderRadius:"10px",
        backgroundColor:"#bbd9e7",
    }}
    className={`messageBox ${message.author === profileName ? "user" : "bot"}`}
    key={index}

  >
    <ListItemAvatar>
      <Avatar
        alt="logo"
        src={message.author === profileName ? LogoPerson : LogoBot}
      />
    </ListItemAvatar>
    <ListItemText
      primary={message.text}
      secondary={
        <React.Fragment>
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.primary"
          />
          {message.author}
        </React.Fragment>
      }
    />
  </ListItem>
);},[]);

  return (
    <div >
      <List className={"chat-box"}
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
        {getMessagesById?.map((message, index) => renderMessage(message,index))}
          <div ref={messagesEndRef}/>
      </List>

    </div>
  );
}
export default MessageList;
