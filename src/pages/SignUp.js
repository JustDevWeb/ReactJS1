import {
  Box,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Email, Error, Password } from "@mui/icons-material";
import Button from "@mui/material/Button";
import firebase from "../services/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth(firebase);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (event) {
      setError(error.message);
    }
  };
  const handeEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className={"container"}>
      <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
        <Typography sx={{ fontSize: "30px" }} component={"h1"}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              m: 1,
              width: 500,
            }}
          >
            <Typography
              sx={{ fontSize: "20px", marginBottom: "10px" }}
              component={"h3"}
            >
              Please fill out the account form
            </Typography>

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
            <div>
              {error && (
                <p>
                  <Error>{error}</Error>
                </p>
              )}
              <Button type={"submit"} variant={"contained"}>
                Login
              </Button>
            </div>
          </Paper>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;