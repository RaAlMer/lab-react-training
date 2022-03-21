import "./Rating.css";
//import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export function Rating(props) {
  const stars = (num) => {
    if (num >= 0.5 && num < 1.5) {
      return "★☆☆☆☆";
    } else if (num >= 1.5 && num < 2.5) {
      return "★★☆☆☆";
    } else if (num >= 2.5 && num < 3.5) {
      return "★★★☆☆";
    } else if (num >= 3.5 && num < 4.5) {
      return "★★★★☆";
    } else if (num >= 4.5) {
      return "★★★★★";
      /* return (
        <p>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </p>
      ); */
    } else {
      return "☆☆☆☆☆";
    }
  };
  return (
    <div className="stars_container">
      <p>{stars(props.children)}</p>
    </div>
  );
}
