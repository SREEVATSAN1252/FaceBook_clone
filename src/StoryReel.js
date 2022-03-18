import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/6070046/pexels-photo-6070046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        tittle="Robert"
        profileSrc="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600w-1714666150.jpg"
      />
      <Story
        image="https://images.pexels.com/photos/5255164/pexels-photo-5255164.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        tittle="Williams"
        profileSrc="https://image.shutterstock.com/image-photo/handsome-entrepreneur-outdoor-close-600w-1142340287.jpg"
      />
      <Story
        image="https://blog.hootsuite.com/wp-content/uploads/2021/05/instagram-story-hacks-01.png.webp"
        tittle="Patric"
        profileSrc="https://image.shutterstock.com/image-photo/attractive-young-businessman-wearing-suit-600w-1434688313.jpg"
      />
      <Story
        image="https://blog.hootsuite.com/wp-content/uploads/2021/05/instagram-story-hacks-21.jpeg.webp"
        tittle="Tony"
        profileSrc="https://image.shutterstock.com/image-photo/portrait-young-handsome-businessman-600w-242078338.jpg"
      />
      <Story
        image="https://blog.hootsuite.com/wp-content/uploads/2021/05/instagram-story-hacks-16.png.webp"
        tittle="Peter"
        profileSrc="https://image.shutterstock.com/image-photo/portrait-handsome-businessman-600w-121432408.jpg"
      />
    </div>
  );
}

export default StoryReel;
