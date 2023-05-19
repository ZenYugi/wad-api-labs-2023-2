import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from './authContext';

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";


const LoginPage = props => {
  const context = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  let location = useLocation();

  // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
  const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

  if (context.isAuthenticated === true) {
    return <Navigate to={from} />;
  }

 
  

  return (
    <>
      <Typography variant="h4" color="yellow" sx={{ flexGrow: 1 }}>Login page</Typography>

      <Typography variant="h5" color="yellow" sx={{ flexGrow: 1 }}>You must log in to view the protected pages </Typography>

      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />

      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />





      

      {/* Login web form  */}
      <Button variant="contained" size="small" onClick={login} >Log in</Button>

      <Typography variant="h5" color="yellow" sx={{ flexGrow: 1 }}>Not Registered?

      <Link href="/signup" color="inherit" underline="always">
  {'Sign Up'}
</Link></Typography>
    </>
  );
};



export default LoginPage;
