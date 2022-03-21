import { useState } from "react";
import "./Carousel.css";

export function Carousel({ images }) {
  const [image, setImage] = useState(images[0]);
  const leftClick = () => {
    if (image === images[0]) {
      setImage(images[images.length - 1]);
    } else {
      let idx = images.findIndex((imag) => imag === image);
      setImage(images[idx - 1]);
    }
  };
  const rightClick = () => {
    if (image === images[images.length - 1]) {
      setImage(images[0]);
    } else {
      let idx = images.findIndex((imag) => imag === image);
      setImage(images[idx + 1]);
    }
  };

  return (
    <div className="img_container">
      <img src={image} alt="Pic" />
      <div>
        <button onClick={leftClick}>Left</button>
        <button onClick={rightClick}>Right</button>
      </div>
    </div>
  );
}
