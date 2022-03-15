import "./Random.css";

function Random (props){

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
      
    return (
        <p className="random">Random value between {props.min} and {props.max} => {randomIntFromInterval(props.min, props.max)}</p>
    );
};

export default Random;