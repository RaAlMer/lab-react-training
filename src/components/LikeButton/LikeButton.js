import { useState } from "react";
import "./LikeButton.css";

export function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorBtn, setColorBtn] = useState("purple");
  const handleClick = () => {
    setLikes(likes + 1);
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    let random = Math.floor(Math.random() * (colors.length - 0 + 1));
    setColorBtn(colors[random]);
  };
  return (
    <div className="like_container">
      <button onClick={handleClick} style={{ backgroundColor: colorBtn }}>
        {likes} Likes
      </button>
    </div>
  );
}
