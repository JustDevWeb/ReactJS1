import { useCallback, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllGists } from "../store/middleware";
import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../store/gists/selectors";
import Button from "@mui/material/Button";

const Gist = () => {
  const dispatch = useDispatch();
  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  const renderGist = useCallback(
    (gist, index) => (
      <li key={index}>{gist.description || "No description"} </li>
    ),
    []
  );

  if (loading) {
    return (
      <div className={"reconnect"}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={"reconnect"}>
        <>
          <h3>Oops, Error</h3>
          <Button
            style={{ backgroundColor: "lightblue", marginTop: "10px" }}
            onClick={requestGists}
          >
            Try again
          </Button>
        </>
      </div>
    );
  }

  return (
    <div className={"container"}>
      <ul>{gists.map(renderGist)}</ul>
    </div>
  );
};

export default Gist;