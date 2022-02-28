import {ADD_MESSAGE, UPDATE_MESSAGES} from "./actions";
// import {DELETE_CHAT} from "../chats/actions";

const initialState = {
    messageList:{}
}


/**
 * messageList:{
 *     [chatId]:{
 *         id: string,
 *         text: string,
 *         author: string
 *     }
 *
 * }
 */

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MESSAGE: {
        console.log(action);
        const currentList = state.messageList[action.chatId] || [];
        return {
          ...state,
          messageList: {
            ...state.messageList,
            [action.chatId]: [
              ...currentList,
              {
                ...action.message,
                id: `${action.chatId}${currentList.length}`,
              },
            ],
          },
        };
      }


      case UPDATE_MESSAGES: {
            return {
            ...state,
                messageList: {
                ...state.messageList,
                [action.chatId]: action.messages
                }
            };
      }
      // case DELETE_CHAT:{
      //     return {
      //         ...state,
      //     }
      // }
      default:
        return state;
    }
}

export default messagesReducer;