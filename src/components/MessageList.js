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
import React, { useCallback, useEffect, useRef } from "react";
import {useDispatch, useSelector} from "react-redux";
import LogoBot from "../assets/logobot.png";
import { useParams } from "react-router-dom";
import {getMessagesByChatIdWithFB} from "../store/middleware";

const MessageList = () => {
  const profileName = useSelector(state => state.profile.name);
  const dispatch = useDispatch();
  const messages = useSelector(state=>state.messages.messageList);
  // const [messages, setMessages] = useState([]);
  const { chatId } = useParams();
  const messagesEndRef = useRef(null);
  const currentMessages = messages[chatId];

  useEffect(() => {
    dispatch(getMessagesByChatIdWithFB(chatId))
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
         >
        {currentMessages?.map((message, index) => renderMessage(message, index))}
        <div ref={messagesEndRef} />
      </List>
    </div>
  );
};


export default MessageList;
