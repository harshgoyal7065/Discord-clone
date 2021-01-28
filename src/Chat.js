import React,{useState, useEffect} from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader.js";
import Message from "./Message.js";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftCardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import {useSelector} from "react-redux";
import {selectChannelId,selectChannelName} from "./features/appSlice.js";
import {selectUser} from "./features/userSlice.js";
import db from "./firebase";
import firebase from "firebase";


function Chat(){

  const user= useSelector(selectUser);
  const channelId=useSelector(selectChannelId);
  const channelName=useSelector(selectChannelName);
  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);

    useEffect(()=>{
      if(channelId){
        db.collection("Channels").doc(channelId).collection("Messages").orderBy("timestamp").onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc)=>doc.data()))
        );
      }
    }, [channelId]);

    const sendMessage = e=>{
      e.preventDefault();

      db.collection("Channels").doc(channelId).collection("Messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user,
      });
      setInput("");
    }
  return(
    <div className="chatSection">
  <ChatHeader channelName={channelName}/>
  <div className="chat_messages">
    {messages.map((message)=>(
        <Message
        timestamp={message.timestamp}
        message={message.message}
        user={message.user}/>
    ))}

  </div>
  <div className="chat_input">
    <AddCircleIcon fontSize="large"/>
    <form>
      <input value={input} disabled={!channelId} onChange={(e)=>setInput(e.target.value)} placeholder="Message #test"/>
      <button onClick={sendMessage} className="input_button" type="submit">Send message</button>

    </form>
    <div className="chat_inputIcons">
      <CardGiftCardIcon fontSize="large"/>
      <GifIcon fontSize="large"/>
      <EmojiEmotionsIcon fontSize="large"/>
    </div>
  </div>
  </div>);
}

export default Chat;
