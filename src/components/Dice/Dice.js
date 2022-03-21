import { useState } from "react";
import "./Dice.css";
import emptyDice from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

export function Dice() {
  const dices = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ];
  const randomDice = () => {
    let random = Math.floor(Math.random() * (dices.length));
    return dices[random];
  };
  const [image, setImage] = useState(randomDice);
  const togglePic = () => {
    setTimeout(toggleImage, 1000);
    setImage(
      emptyDice
    );
  };
  const toggleImage = () => {
    setImage(randomDice);
  };

  return (
    <div className="dice_container">
      <img onClick={togglePic} src={image} alt="Pic" />
    </div>
  );
}
