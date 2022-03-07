export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const CHAT_LIST_UPDATE = "CHATS::CHAT_LIST_UPDATE";

export const addChat= (name)=>({
    type: ADD_CHAT,
    name: name
});

export const deleteChat=(index)=>({
    type: DELETE_CHAT,
    payload: index
});

export const chatListUpdate=(chatArr)=>({
    type: CHAT_LIST_UPDATE,
    payload: chatArr
});