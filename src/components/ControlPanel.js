import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessageWithSaga} from "../store/messages/actions";

const ControlPanel = ()=>{
    const getTime = useCallback(()=>{
        return `${new Date().getHours()}:${new Date().getMinutes()}`
    },[]);

    const [value, setValue] = useState([]);
    const [time,setTime]= useState(getTime);
    // const [login] = useState({ me: "me", bot: "bot" });




    const inputFocus = useRef(null);

    const profileName=useSelector(state=>state.profile.name);
    const dispatch = useDispatch();
    const {chatId} = useParams();

    const handleChange = useCallback ((event) => {
        setValue(event.target.value);
    },[])


    const handleButton= useCallback(
        ()=>{
            setTime(getTime);
            dispatch(addMessageWithSaga(chatId,{
                text:value,
                author:profileName,
                date:time
            }));
            setValue("")
        }
    ,[value,chatId,dispatch])




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