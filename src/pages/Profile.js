import {useCallback, useState} from "react";
import {CHANGE_NAME} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";

const Profile = ()=>{
    const {name,showName}= useSelector((state)=>state.profile);
    const [value,setValue] = useState(name);
    const dispatch = useDispatch();

    const handleChange = useCallback((event) => {
      setValue(event.target.value);
    }, []);

    const setName = useCallback(() => {
      dispatch({ type: CHANGE_NAME, payload: value });
    }, [dispatch,value]);




    return (
        <div className={'container'}>
            <h4>Profile</h4>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <span>Show Name</span>
            <button onClick={setName}>Изменить имя</button>
        </div>
    );
};

export default Profile