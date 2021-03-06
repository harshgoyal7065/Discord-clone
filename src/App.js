import React, { useEffect } from 'react';
import './App.css';
import Sidebar from "./Sidebar.js";
import Chat from "./Chat.js"
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice.js";
import Login from "./Login.js";
import {auth} from "./firebase.js";
import {login, logout} from "./features/userSlice.js"

function App() {
  const user= useSelector(selectUser);
  const dispatch= useDispatch();
useEffect (() => {
  auth.onAuthStateChanged((authUser) => {
    if(authUser){
      //Logged in
      dispatch(login({
        uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName
      })
    );
  }
    else{
      //logged out
      dispatch(logout());
    }
  });
}, [dispatch]);


  return (
    <div className = "app">
    {user ? (
      <>
      <Sidebar/>
      <Chat/>
      </>
    ):(<Login/>)
  }

      </div>


    );
}

export default App;
