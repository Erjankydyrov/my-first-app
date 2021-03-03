import { useState } from "react";

function ColorText({ value }) {
    const [number, setNumber] = useState(value ?? "");
    return (
        <div className="InputRange">
            <span style = {{color: number}}>example</span>
            <input
                type="color"
                value = {number}
                onInput={(event) => setNumber(event.target.value)} />
        </div>
    );
}
export default ColorText;