import "./Greeting.css";

function Greetings (props){
    switch(props.lang){
        case "de":
            return <div className="lang_container">Hallo {props.children}</div>;
        case "es":
            return <div className="lang_container">Hola {props.children}</div>;
        case "en":
            return <div className="lang_container">Hello {props.children}</div>;
        case "fr":
            return <div className="lang_container">Bonjour {props.children}</div>;
        default:
            return <div className="lang_container">Hello {props.children}</div>
    }
};

export default Greetings;