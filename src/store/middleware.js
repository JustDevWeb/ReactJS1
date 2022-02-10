import {ADD_MESSAGE, addMessage} from "./messages/actions";

const middleware = store=>next=>action=> {

  if(action.type=== ADD_MESSAGE && action.message.author!=='bot'){
      const botMessage = {
          text: "Hello i am bot , i send message from middleware ",
          author: "bot"
      }
      setTimeout(()=>{
          store.dispatch(addMessage(action.chatId, botMessage));
      },1500)
  }

    return next(action)
}


export default middleware;