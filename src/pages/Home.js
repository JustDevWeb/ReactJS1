import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className={"container"}>
      <Typography
        sx={{ fontSize: "30px", marginBottom: "10px" }}
        component={"h1"}
      >
        Home
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button>
          <Link to="/login">Enter Login</Link>
        </Button>
        <Button>
          <Link to="/signup">Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;