import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder=" Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div
          className="header__options
        header__option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__options">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__options">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__options">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__options">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
