import {ADD_CHAT, DELETE_CHAT} from "./actions";

const initialState = {
    chatList:[]
}


// [{
// id:string,name:string},{}]

const chatsReducer = (state=initialState,action)=>{
    switch (action.type){
        case ADD_CHAT:{
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id:`id${state.chatList.length}`,
                        name: action.name
                    }
                ]
            }
        }

        case DELETE_CHAT:{
            return {
                ...state,
                chatList: [...state.chatList.filter((chat,index)=>index!==action.payload)]
            }
        }
        default: return state
    }
    }

export default chatsReducer;
