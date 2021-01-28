import React from "react";
import "./SidebarChannel.css";
import {useDispatch} from "react-redux";
import {selectChannelInfo} from "./features/appSlice.js";

function SidebarChannel({ id, channelName }){
  const dispatch = useDispatch();

  return(<div className = "sidebarChannel" onClick={() =>
    dispatch(selectChannelInfo({
      channelId: id,
      channelName: channelName,
    }))}>
  <h4><span className="sidebarChannel_hash">{channelName}</span></h4>
  </div>);
}

export default SidebarChannel;
