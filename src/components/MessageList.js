import Logo from '../logoacc.jpg'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function MessageList({messageList}) {
  const [chats] = useState([
    { id: 1, name: "Chat1" },
    { id: 2, name: "Chat2" },
    { id: 3, name: "Chat3" },
  ]);
    console.log(messageList)
  return (

    <div className={"chats-box"}>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {messageList.map((message,index)=>(
                <>
                    <ListItem key={index} alignItems="flex-start">
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
