import './App.scss';
import React, {useEffect, useState , useRef} from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';




function App() {

    const [messageList, setMessageList] = useState([]);
    const [login] = useState({me:"me",bot:"bot"});
    const [chatMessage, setChatMessage] = useState("");
    const [chats] = useState([{id:1, name: 'Alex' },{id:2, name: 'Bryan'}, {id:3, name: 'Kate'}])

    const time= new Date();
    const currentTime= `${time.getHours()}:${time.getMinutes()}`
    const messagesEndRef = useRef(null)
    const inputFocus =useRef(null)





    const updateChatMessage = (e) => {
        setChatMessage(e.target.value);
    }
    const updateMessageList = (e) => {

        setMessageList(prevMessageList => (prevMessageList.concat(
            {author: login.me, text: chatMessage, time:currentTime}))
        );
        setChatMessage("");
    };


    // const toggleForm = (e) => {
    //     setIsLogin(!isLogin);
    // };

    useEffect(() => {
        let interval=0;
        if (messageList.length>0) {
            if (messageList[messageList.length - 1].author !== "bot") {

                interval = setInterval(() => {
                    setMessageList(prevMessageList =>
                        prevMessageList.concat({author: login.bot, text: "this message was generated automatically",time:currentTime}))

                }, 1500)
            }
        }
    return ()=>{
            clearInterval(interval)
    }
    }, [messageList]);


    //Auto scrolling
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        inputFocus.current.focus();
    });

    return (
        <div className={'App'}>
                <div className={'chats-box'}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={chats[0].name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={chats[1].name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={chats[2].name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {' — Do you have Paris recommendations? Have you ever…'}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </div>
                <div className={'chat-wrapper'}>
                <h1 className={'form-title'}>Messenger</h1>
                <div className={"chat-box"}>
                    {messageList.map((message,index) => <div className={`messageBox ${message.author==='bot' ? 'bot': 'user'}`} key={index}>
                        <span>{message.author}</span>
                        <p className={"message-text"}>{message.text}<sub className={"message-time"}>{message.time}</sub></p>
                    </div>)}
                    <div ref={messagesEndRef}/>
                </div>
                <form className={"my-form"}>
                    <input ref={inputFocus} required={true} onChange={updateChatMessage} autoFocus={true}
                              placeholder={" Write something here , please!"} className={"textarea"} value={chatMessage}
                              id="text-here" >
                    </input>
                    <Button  className={'send-button'} disabled={!chatMessage} onClick={updateMessageList} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </form>
                </div>
        </div>
    )
}


export default App;

