import "./BoxColor.css";

export function BoxColor (props){
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }
    const rgbToHex = (r,g,b) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    return (
        <div className="box" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    );
};