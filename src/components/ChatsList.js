import {Link} from 'react-router-dom';

const ChatsList = ({chats,chatId})=>{
    console.log(chats)
    return(
        <div className={'chats-list'}>
                {Object.keys(chats).map((id,index)=>(
                <Link key={index} to={`/chats/${id}`}>
                    <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                        {chats[id].name}
                    </b>
                </Link>
        ))}</div>
    )
}

export default ChatsList;