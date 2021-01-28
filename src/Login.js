import React from "react";
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth,provider} from "./firebase.js";
// import DiscordLogo from "./Discord_icon.png";

function Login(){
//

      const signIn = () =>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

      };
  return(

    <div className="login">
      <div className="login_logo">
        <h2>Hello</h2>
      </div>
        <Button onClick={signIn}>Sign In</Button>

    </div>);
}

export default Login;
