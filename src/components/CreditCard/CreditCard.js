import "./CreditCard.css";
import Visa from "../../assets/images/visa.png";
import MasterCard from "../../assets/images/master-card.svg";

function CreditCard(props){
    const logo = (type) => {
        if(type === "Visa"){
            return Visa;
        } else {
            return MasterCard;
        }
    }
    const creditCardNumber = (num) => {
        return `●●●● ●●●● ●●●● ${num.toString().slice(-4)}`;
    }
    const expiration = (month, year) => {
        if (month < 10){
            month = `0${month}`;
        }
        year = year.toString().slice(-2);
        return `${month}/${year}`;
    }
    return (
        <div className="creditCard_container" style={{backgroundColor: props.bgColor, color: props.color}}>
            <img src={logo(props.type)} alt={props.type}/>
            <div className="info">
                <p className="creditNum">{creditCardNumber(props.number)}</p>
                <div className="expiration">
                    <p className="notNumber">Expires {expiration(props.expirationMonth, props.expirationYear)}</p>
                    <p className="notNumber">{props.bank}</p>
                </div>
                <p className="notNumber">{props.owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;