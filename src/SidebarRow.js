import { Avatar } from "@mui/material";
import "./SidebarRow.css"
import React from "react";

function SidebarRow({ tittle,src,Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon &&<Icon/>}
      <h4>{tittle}</h4>

    </div>
  );
}

export default SidebarRow;
