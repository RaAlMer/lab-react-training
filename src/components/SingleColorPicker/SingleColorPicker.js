import "./SingleColorPicker.css";

export function SingleColorPicker({ color, value, onChange }) {
    const switchColor = (col) => {
        switch(col){
            case "r":
                return "R: ";
            case "g":
                return "G: ";
            case "b":
                return "B: ";
            default:
                return;
        }
    }

    return (
        <div className="SingleColor_container">
            {(() => {
                switch (color) {
                    case 'r':
                        return (
                            <div className='colorBox' style={{backgroundColor: `rgb(${value}, 0, 0)`, width: "40px", height: "40px", border: "1px solid black"}}></div>
                        )
                    case 'g':
                        return (
                            <div className='colorBox' style={{backgroundColor: `rgb(0, ${value}, 0)`, width: "40px", height: "40px", border: "1px solid black"}}></div>
                        )
                    case 'b':
                        return (
                            <div className='colorBox' style={{backgroundColor: `rgb(0, 0, ${value})`, width: "40px", height: "40px", border: "1px solid black"}}></div>
                        )
                    default:
                        return (
                            <div></div>
                        )
                }
                })()}
            <label>{switchColor(color)}</label>
            <input type="number" min="0" max="255" value={value} onChange={onChange} />
        </div>
    );
}
