import {useCallback} from "react";
import {toogleShowName} from "../store/profile/chatActions";
import {useDispatch, useSelector} from "react-redux";

const Profile = ()=>{
    const {name,showName}= useSelector((state)=>state);
    const dispatch = useDispatch()

    const setShowName = useCallback(()=>{
        dispatch(toogleShowName)
    },[dispatch])
    console.log(showName,name)
    return (
        <div className={'container'}>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />

            <div>{showName&&<div>{name}</div>}</div>
        </div>
    );
};

export default Profile