import { useState } from "react";

function Inputs() {
    let [text, setText] = useState();

    return (
        <div className = "Inputs">

            <input 
                type = "text" 
                value = {text} 
                onInput = {(event) => setText(event.target.value.trim())} />
            <input 
                type = "text" 
                value = {text} 
                onInput = {(event) => setText(event.target.value.trim())} />

        </div>
    )
}

export default Inputs;