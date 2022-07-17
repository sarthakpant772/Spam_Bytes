import React, { useEffect, useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useSelector } from "react-redux";
import { selectuserByEmail } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const Login = ({ onChange }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userType, setUserType] = useState("IN");
  const data = { email, password };

  const handleOnChangeUser = (event) => {
    setUserType(event.target.value);
    console.log(event.target.value);
  };

  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

    try {
      console.log(data.email);
      console.log(userType);
      const resp = await axios.post("http://localhost:5000/auth/login", data);
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        console.log(resp.data);
        // console.log(resp.data.acType)
        if (resp.data.user.acType === userType) {
          navigate(`/${userType}/${resp.data.user._id}`);
        } else {
          alert("Faliure");
          console.log("wrong user type");
        }
      } else {
        alert("Failure");
        console.log(resp);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const ForgotPassword = async () => {
    try {
      console.log(email);
      const resp = await axios.post(
        `http://localhost:5000/auth/forgotpassword`,
        email
      );

      if (resp.status === 200) {
        console.log(resp.data);
        alert(resp?.data?.message);
      } else {
        alert("Error");
        console.error(resp);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          mt: 7,
          width: "65%",
          height: "65vh",
        },
      }}
    >
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            sm={7}
            xs={12}
            sx={{
              my: { xs: "auto" },
            }}
          >
            <Container
              sx={{
                alignSelf: "center",
                width: "70%",
                m: "auto",
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{
                  fontWeight: 700,
                  mb: 7,
                  fontSize: { xs: 25, sm: 35 },
                }}
              >
                Welcome back
              </Typography>
              <FormControl>
                <TextField
                  sx={{
                    mb: 5,
                    display: "block",
                  }}
                  variant="standard"
                  label="Email"
                  placeholder="Enter Email"
                  type="email"
                  required
                  fullWidth
                  error={emailError}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  sx={{
                    display: "block",
                  }}
                  variant="standard"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  error={passwordError}
                  required
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />

                <FormLabel id="userType" sx={{ marginTop: "20px" }}>
                  Login as
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="userType"
                  name="userTypeBut"
                  defaultValue="IN"
                >
                  <FormControlLabel
                    value="IN"
                    control={<Radio />}
                    onChange={handleOnChangeUser}
                    label="User"
                  />
                  <FormControlLabel
                    value="NGO"
                    control={<Radio />}
                    onChange={handleOnChangeUser}
                    label="NGO"
                  />
                  <FormControlLabel
                    value="ADMIN"
                    control={<Radio />}
                    onChange={handleOnChangeUser}
                    label="Nodal Officer"
                  />
                </RadioGroup>
              </FormControl>
              <Button onClick={ForgotPassword}>
                Forgot Password or Change password
              </Button>
              <Button
                size="large"
                variant="contained"
                onClick={handleLogin}
                sx={{
                  backgroundColor: "black",
                  mt: 5,
                  width: "50%",
                }}
              >
                LOGIN
              </Button>
              <button
                 onClick={sendMail}
              >Forgot Password</button>
            </Container>
          </Grid>

          <Grid
            item
            sm={5}
            xs={12}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5af19",
                height: "65vh",
                textAlign: "center",
                color: "white",
              }}
            >
              Please LogIn
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
