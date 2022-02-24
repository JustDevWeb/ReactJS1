import { useCallback, useState } from "react";
import { CHANGE_NAME } from "../store/profile/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

const Profile = () => {
  const { name } = useSelector((state) => state.profile);
  const [value, setValue] = useState(name);
  const dispatch = useDispatch();

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const setName = useCallback(() => {
    dispatch({ type: CHANGE_NAME, payload: value });
  }, [dispatch, value]);

  return (
    <div className={"container"}>
      <h4>Profile</h4>
      <div className={"profile-form"}>
        <input type="text" value={value} onChange={handleChange} />
        <Button
          style={{
            width: "170px",
            backgroundColor: "lightblue",
            marginTop: "10px",
          }}
          onClick={setName}
        >
          Изменить имя
        </Button>
      </div>
    </div>
  );
};

export default Profile;
