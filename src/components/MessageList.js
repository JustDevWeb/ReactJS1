import Logo from '../logoacc.jpg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function MessageList({messages}) {
  return (

    <div className={"chats-box"}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", margin:'0', padding:'0' }}>
            {messages.map((message,index)=>(
                <>
                    <ListItem className={'list-message'} key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="logo" src={Logo} />
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
                     <Divider variant="inset" component="li" />
                 </>
            ))}
      </List>
    </div>
  );
}
export default MessageList;
