import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    signInUsingGoogle();
    history.push(redirect_uri);
  };

  return (
    <div>
      <h2>Please Log in</h2>
      <Button onClick={handleGoogleLogIn}>Google Sign In</Button>
    </div>
  );
};

export default Login;
