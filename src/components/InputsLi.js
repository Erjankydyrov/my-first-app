import { useState } from "react";

function InputsLi() {
    let [text, setText] = useState();

    return (
        <div className = "Inputs">

            <ul>
                <li>{text}</li>
            </ul>
            
            <input type = "text" onInput = {(event) => setText(event.target.value.trim())} />

        </div>
    )
}

export default InputsLi;