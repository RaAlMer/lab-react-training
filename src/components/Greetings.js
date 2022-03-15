import { useState } from "react/cjs/react.production.min";

function Greetings (props){
    const [language, setLanguage] = useState();

    const toggleLang = event => {
        setLanguage(props.lang);
    }

    return (
        <div>
            <select onChange={ toggleLang }>
                <option value="de"> Hallo </option>
                <option value="fr"> Bonjour </option>
                <option value="en"> Hola </option>
                <option value="es"> Hello </option>
            </select>
        </div>
    );
};

export default Greetings;