import "./DriverCard.css";
import {Rating} from "../../components";

export function DriverCard(props) {
  return (
    <div className="driverCard_container">
      <img src={props.img} alt={props.img} />
      <div className="info">
        <p className="infoName">
          <b>{props.name}</b>
        </p>
        <p>
          <Rating children={props.rating} />
        </p>
        <p className="infoCar">
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
