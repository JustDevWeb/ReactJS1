import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {addMessageWithFB} from "../store/middleware";

const ControlPanel = () => {


    const [value, setValue] = useState('');
    const inputFocus = useRef(null);
    const profileName = useSelector(state => state.profile.name);
    const dispatch = useDispatch();
    const {chatId} = useParams();


    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, [value]);


    const handleButton = useCallback(
        () => {

            const message = {
                text: value,
                author: profileName
            };

            dispatch(addMessageWithFB(chatId,message))
            setValue('');
        }, [value, chatId, profileName]);


    useEffect(() => {

        inputFocus.current.focus();
    }, []);

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
                endIcon={<SendIcon/>}
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