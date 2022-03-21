import { useState } from "react";
import "./ClickablePicture.css";
import img2 from "../../assets/images/maxence.png";
import imgClicked2 from "../../assets/images/maxence-glasses.png";

export function ClickablePicture({ img, imgClicked }) {
  const [image, setImage] = useState(img2);
  const togglePic = () => {
    if (image === img2) {
      setImage(imgClicked2);
    } else {
      setImage(img2);
    }
  };

  return (
    <div className="img_container">
      <img onClick={togglePic} src={image} alt="Pic" />
    </div>
  );
}
