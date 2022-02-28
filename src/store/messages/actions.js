import {getTime} from "../../lib/getTime";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_WITH_SAGA = "MESSAGES::ADD_MESSAGE_WITH_SAGA";
export const UPDATE_MESSAGES = "MESSAGES::UPDATE_MESSAGES";


export const addMessage = (chatId,message)=>({
    type: ADD_MESSAGE,
    chatId,
    message,
    });


// export const addMessageWithSaga=(chatId,message)=>({
//     type: ADD_MESSAGE_WITH_SAGA,
//     chatId,
//     message
// })

export const addMessageWithThunk=(chatId,message)=>(dispatch,getState)=>{
    dispatch(addMessage(chatId,message));
    if(message.author!=="bot"){
        const botMessage = {
            text: "Hello i am bot , i send message from thunk ",
            author: "bot",
            date: getTime()
        }
        setTimeout(()=>{
        dispatch(addMessage(chatId,botMessage));
        },1500)
    }

};

export const updateMessages = (chatId, messages)=>({
    TYPE: UPDATE_MESSAGES,
    chatId,
    messages
});

