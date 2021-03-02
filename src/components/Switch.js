import { useState } from "react";

function Switch() {
    let [name, setName] = useState();

    return (
        <div className = "Switch">
            <h1>Yor name is "{name}"</h1>
            <input 
                type = "text"
                onInput = {(event) => setName(event.target.value)} />
        </div>
    )
}

export default Switch;