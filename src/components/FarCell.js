import { useState } from "react";

function FarCell({ valueC, valueF }) {
    const [number, setNumber] = useState(valueF ?? "");
    const [number2, setNumber2] = useState(valueC ?? "");
    return (
        <div className="InputRange">
            C<input
                type="text"
                value = {number}
                onInput={(event) => setNumber(event.target.value)} /> = {number * 1.8 + 32}Farenget
            <br></br>
            F<input
                type="text"
                value = {number2}
                onInput={(event) => setNumber2(event.target.value)} /> = {(number2 - 32) / 1.8}Cellsis
        </div>
    );
}
export default FarCell;