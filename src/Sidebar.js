import { EmojiFlagsOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        tittle={user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        tittle="COVID-19 Information Center"
      />

      <SidebarRow tittle="Pages" Icon={EmojiFlagsOutlined} />
      <SidebarRow tittle="friends" Icon={PeopleIcon} />
      <SidebarRow Icon={ChatIcon} tittle="Messenger" />
      <SidebarRow Icon={StorefrontIcon} tittle="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} tittle="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} tittle="Market Place" />
    </div>
  );
}

export default Sidebar;
