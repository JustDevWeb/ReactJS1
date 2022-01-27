import './App.scss';
import React, {useEffect, useState , useRef} from "react";



function App() {

    const [messageList, setMessageList] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [login, setLogin] = useState("");
    const [chatMessage, setChatMessage] = useState("");

    const time= new Date();
    const currentTime= `${time.getHours()}:${time.getMinutes()}`
    const messagesEndRef = useRef(null)




        const updateLogin = (e) => {
        setLogin(e.target.value)
    }
    const updateChatMessage = (e) => {
        setChatMessage(e.target.value);
    }
    const updateMessageList = (e) => {

        setMessageList(prevMessageList => (prevMessageList.concat(
            {author: login, text: chatMessage, time:currentTime}))
        );
        setChatMessage("");
    };


    const toggleForm = (e) => {
        setIsLogin(!isLogin);
    };

    useEffect(() => {
        let interval=0;
        if (messageList.length>0) {
            if (messageList[messageList.length - 1].author !== "bot") {

                interval = setInterval(() => {
                    setMessageList(prevMessageList =>
                        prevMessageList.concat({author: "bot", text: "this message was generated automatically",time:currentTime}))

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
    });

    return (
        <div>
            <div className={'chat-wrapper'}>
                <h1 className={'form-title'}>Messenger</h1>
                {!isLogin ? (<form className={"login-form"}>
                    <input required={true} className={"login-form__field"} value={login} onChange={updateLogin}
                           placeholder={"Please enter your user name"}/>
                    <button className={"login-form__button button"} type={'submit'} onClick={toggleForm}>Confirm</button>
                </form>) : (<form className={"my-form"}>
                    <textarea required={true} onChange={updateChatMessage}
                              placeholder={" Write something here , please!"} className={"textarea"} value={chatMessage}
                              id="text-here" cols="30" rows="5">
                    </textarea>
                    <button disabled={!chatMessage} onClick={updateMessageList} className={'form-submit button'}
                            type={"button"}> Ready to send
                    </button>
                </form>)}
                <div className={"chat-box"}>
                    {messageList.map((message,index) => <div className={`messageBox ${message.author==='bot' ? 'bot': 'user'}`} key={index}>
                        <span>{message.author}</span>
                        <p className={"message-text"}>{message.text}<sub className={"message-time"}>{message.time}</sub></p>
                    </div>)}
                    <div ref={messagesEndRef}/>
                </div>

            </div>


        </div>
    )
}

// class App extends React.Component{
//     state = {
//         massageList : [
//             {
//                 author: 'Louis L’Amour',
//                 text: 'Start writing, no matter what. The water does not flow until the faucet is turned on.'
//         },
//             {
//                 author: 'Steven Pressfield',
//                 text: 'Start before you’re ready.'
//             },
//             {
//                 author: 'Jodi Picoult',
//                 text: 'You can always edit a bad page. You can’t edit a blank page'
//             },
//             {
//                 author: 'Ray Bradbury',
//                 text: 'First, find out what your hero wants, then just follow him!'
//             }
//         ]
//     }
//
//     render() {
//         return (
//                 <div>
//                     <div className={'quotes-block'}>
//                     <h1 className={'quotes-title'}>Always be codding</h1>
//                     {this.state.massageList.map(message=><div className={'quotes'}>
//                     <blockquote><p>{message.text}</p><cite>{message.author}</cite></blockquote>
//
//                 </div>)}</div>


//                 </div>
//         )
//     }
// }
//
export default App;

