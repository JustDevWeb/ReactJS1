import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessage} from "../store/messages/actions";

const ControlPanel = ()=>{


    const [value, setValue] = useState([]);
    // const [login] = useState({ me: "me", bot: "bot" });


    const time = new Date();
    const currentTime = `${time.getHours()}:${time.getMinutes()}`;
    const inputFocus = useRef(null);

    const profileName=useSelector(state=>state.profile.name);
    const messages= useSelector(state=>state.messages.messageList);
    const dispatch = useDispatch();
    const {chatId} = useParams();

    const handleChange = useCallback ((event) => {
        setValue(event.target.value);
    },[])

    const sendMessage= (text,author)=>{
        dispatch(addMessage(chatId,{
            text:text,
            author:author
        }))
    };

    const handleButton=()=>{
        sendMessage(value,profileName);
        setValue("");
    };

    //Auto scrolling
    useEffect(() => {
                inputFocus.current.focus();
    });


    useEffect(() => {
        let interval ;
        const currentChat= messages[chatId];
        if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName ) {
                interval = setInterval(() => {
                    const botMessage="this message was generated automatically"
                    sendMessage(botMessage,"bot")

                }, 1500);

        }
        return () => {
            clearInterval(interval);
        };
    }, [messages[chatId]]);

    //Auto scrolling
    // useEffect(() => {
    //     messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    //     inputFocus.current.focus();
    // });

    return (
        <form className={"my-form"}>
            <input
                ref={inputFocus}
                required={true}
                onChange={handleChange}
                autoFocus={true}
                placeholder={" Write something here , please!"}
                className={"textarea"}
                value={value}
                id="text-here"
            />
            <Button
                className={"send-button"}
                disabled={!value}
                onClick={handleButton}
                variant="contained"
                endIcon={<SendIcon />}
            >
                Send
            </Button>
        </form>
    )
}

// const updateMessageList = (e) => {
//     setMessageList((prevMessageList) =>
//         prevMessageList.concat({
//             author: login.me,
//             text: chatMessage,
//             time: currentTime,
//         })
//     );
//     setChatMessage("");
// };

export default ControlPanel