import "./IdCard.css";

function IdCard(props){
    let options = {weekday: "short", year: "numeric", month: "long", day: "numeric"}
    return (
        <div className="card_container">
            <img src={props.picture} alt={props.picture}/>
            <div>
                <p><b>First name: </b>{props.firstName}</p>
                <p><b>Last name: </b>{props.lastName}</p>
                <p><b>Gender: </b>{props.gender}</p>
                <p><b>Height: </b>{props.height/100}m</p>
                <p><b>Birth: </b>{props.birth.toLocaleDateString("en-US", options)}</p>
            </div>
        </div>
    );
}

export default IdCard;