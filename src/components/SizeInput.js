import { useState } from "react";

function SizeInput({ value }) {
    const [number, setNumber] = useState(value ?? 16);
    return (
        <div className="InputRange">
            <span style = {{fontSize: number + "px"}}>example</span>
            <input
                type="text"
                value = {number}
                onInput={(event) => setNumber(event.target.value)} />
        </div>
    );
}
export default SizeInput;