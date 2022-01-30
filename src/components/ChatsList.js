import {Link} from 'react-router-dom';

const ChatsList = ({chatsList,chatId})=>{
    console.log(chatsList)
    return(
        <div className={'chatsList'}>
            {Object.keys(chatsList).map((id,index)=>(
            <div key={index}>
                <Link to={`/chats/${id}`}>
                    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                        {chatsList[id].name}
                    </b>
                </Link>
            </div>
        ))}</div>
    )
}

export default ChatsList;