import { useState } from "react";
import "./RGBColorPicker.css";
import { SingleColorPicker } from "../SingleColorPicker/SingleColorPicker";

export function RGBColorPicker() {
    const [rValue, setRValue] = useState(0);
    const [gValue, setGValue] = useState(0);
    const [bValue, setBValue] = useState(0);

    const handleRed = (e) => setRValue(e.target.value);
    const handleGreen = (e) => setGValue(e.target.value);
    const handleBlue = (e) => setBValue(e.target.value);
    
    return (
        <div className="RGBColor_container">
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={handleRed}
            />
            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={handleGreen}
            />
            <SingleColorPicker 
                color="b"
                value={bValue}
                onChange={handleBlue}
            />
            <div className='rgbBox' style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`, width: "40px", height: "40px", border: "1px solid black"}}></div>
        </div>
    );
}
