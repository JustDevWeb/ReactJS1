import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Email, Password } from "@mui/icons-material";
import Button from "@mui/material/Button";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = async (event) => {
    event.preventDefault();
    await auth.signin({ email, password }, () => {
      navigate(from, { replace: true });
    });
  };
  const handeEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className={"container"}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": { m: 1, width: 500, height: 500 },
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            sx={{ fontSize: "20px", marginBottom: "10px" }}
            component={"h3"}
          >
            Enter your Login
          </Typography>
          <Paper
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              placeholder="email"
              type="email"
              name={"email"}
              value={email}
              onChange={handeEmailChange}
            />
            <br />

            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Password />
                  </InputAdornment>
                ),
              }}
              placeholder="password"
              type="password"
              name={"password"}
              value={password}
              onChange={handePasswordChange}
            />
            <br />
            <Button type={"submit"} variant={"contained"}>
              Login
            </Button>
          </Paper>
        </form>
      </Box>
    </div>
  );
};

export default Login;
