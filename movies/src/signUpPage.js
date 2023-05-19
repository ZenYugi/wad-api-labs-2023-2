import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from './authContext';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <>
       <Typography variant="h4" color="yellow" sx={{ flexGrow: 1 }}>SignUp page</Typography>

       <Typography variant="h5" color="yellow" sx={{ flexGrow: 1 }}>You must register a username and password to log in </Typography>

      <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />

      {/* Login web form  */}

      <Button variant="contained" size="small" onClick={register}>Register</Button>
    </>
  );
};

export default SignUpPage;
