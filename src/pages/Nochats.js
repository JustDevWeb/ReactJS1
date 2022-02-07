import ChatsList from "../components/ChatsList";
import {useParams} from "react-router-dom";

const NoChats = ()=>{

    return (
        <div className={'container'}>
            <ChatsList/>
        </div>
    )
}

export default NoChats;