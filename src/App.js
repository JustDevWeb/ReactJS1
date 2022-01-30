import "./App.scss";
import React, { useEffect, useState, useRef } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import MessageList from "./components/MessageList";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [login] = useState({ me: "me", bot: "bot" });
  const [chatMessage, setChatMessage] = useState("");

  const time = new Date();
  const currentTime = `${time.getHours()}:${time.getMinutes()}`;
  const messagesEndRef = useRef(null);
  const inputFocus = useRef(null);

  const updateChatMessage = (e) => {
    setChatMessage(e.target.value);
  };
  const updateMessageList = (e) => {
    setMessageList((prevMessageList) =>
      prevMessageList.concat({
        author: login.me,
        text: chatMessage,
        time: currentTime,
      })
    );
    setChatMessage("");
  };

  useEffect(() => {
    let interval = 0;
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author !== "bot") {
        interval = setInterval(() => {
          setMessageList((prevMessageList) =>
            prevMessageList.concat({
              author: login.bot,
              text: "this message was generated automatically",
              time: currentTime,
            })
          );
        }, 1500);
      }
    }
    return () => {
      clearInterval(interval);
    };
  }, [messageList]);

  //Auto scrolling
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    inputFocus.current.focus();
  });

  return (
    <div className={"App"}>
      <MessageList messageList={messageList} />
      <div className={"chat-wrapper"}>
        <h1 className={"form-title"}>Messenger</h1>
        <div className={"chat-box"}>
          {messageList.map((message, index) => (
            <div
              className={`messageBox ${
                message.author === "bot" ? "bot" : "user"
              }`}
              key={index}
            >
              <span>{message.author}</span>
              <p className={"message-text"}>
                {message.text}
                <sub className={"message-time"}>{message.time}</sub>
              </p>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className={"my-form"}>
          <input
            ref={inputFocus}
            required={true}
            onChange={updateChatMessage}
            autoFocus={true}
            placeholder={" Write something here , please!"}
            className={"textarea"}
            value={chatMessage}
            id="text-here"
          />
          <Button
            className={"send-button"}
            disabled={!chatMessage}
            onClick={updateMessageList}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
