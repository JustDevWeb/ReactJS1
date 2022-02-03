import Logo from '../logoacc.jpg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {useSelector} from "react-redux";
import LogoBot from '../logobot.png';

function MessageList({messages}) {
const {name} = useSelector( state=>state)

  return (

    <div className={"chats-box"}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", margin:'0', padding:'0' }}>
            {messages.map((message,index)=>(
               <ListItem className={'list-message'} key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="logo" src={message.author=== name ? Logo : LogoBot } />
                        </ListItemAvatar>
                        <ListItemText
                            primary={message.author}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: "inline" }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                    </Typography>
                                    {message.text}
                                </React.Fragment>
                            }
                        />

                    </ListItem>
            ))}
      </List>
    </div>
  );
}
export default MessageList;
