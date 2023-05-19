import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return context.isAuthenticated ? (
    <Typography variant="h5" color="yellow" sx={{ flexGrow: 1 }}>
      Welcome {context.userName}! <Button variant="contained" size="small" onClick={() => context.signout()}>Sign out</Button>
    </Typography>
  ) : (
    <Typography variant="h5" color="white" sx={{ flexGrow: 1 }}>
      You are not logged in{" "}
      <Button variant="contained" size="small" onClick={() => navigate('/login')}>Login</Button>
    </Typography>
  );
};

export default BaseAuthHeader;
