import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function Login() {
  const [ {user}, dispatch ] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      
      .then((result) => {
        console.log(result);
        dispatch(
          {
          type: actionTypes.SET_USER,
          user: result.user,
        }
        );
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQw1ap6suLlPXfjjkonIOLpuDydyb_8uoLtxVqz0fOPIgOT_SsB-b03uQylDmN3cRccY&usqp=CAU" />
      </div>
      <Button className="button" type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
