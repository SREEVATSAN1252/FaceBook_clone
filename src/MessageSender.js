import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";
import db from "./firebase";
function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setinput] = useState("");
  const [imageURL, setimageURL] = useState("");
  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageURL,
    });
    setimageURL('');
    setinput('');
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />

        <form>
          <input
          value={input}
            onChange={(e) => setinput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind ${user.displayName} ?`}
          ></input>
          <input
            value={imageURL}
            onChange={(e) => setimageURL(e.target.value)}
            className="messageSender__input2"
            placeholder="image URL (Optional)"
          ></input>
          <button onClick={handleSubmit}  type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h4>Live Video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
