import { useState } from "react";

function DollarsInput({ value }) {
    const [number, setNumber] = useState(value ?? 0);
    return (
        <div className="InputRange">
            $<input
                type="text"
                value = {number}
                onInput={(event) => setNumber(event.target.value)} /> = {number * 85}som
        </div>
    );
}
export default DollarsInput;