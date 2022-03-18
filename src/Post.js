import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import NearMeIcon from "@mui/icons-material/NearMe";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <h4>{message}</h4>
      </div>
      <div className="post__image">
        <img src={image} />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
        </div>
        <div className="post__option">
          <CommentIcon />
        </div>
        <div className="post__option">
          <NearMeIcon />
        </div>
        <div className="post__option">
          <EmojiEmotionsIcon/>
          <ExpandMoreIcon/>
        </div>
      </div>
    </div>
  );
}

export default Post;
