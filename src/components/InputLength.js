import { useState } from "react";

function InputLength(props) {

    let [length, setLength] = useState(0);

    return <div>
        <input type = "text" onInput = {function(len) {setLength(len.target.length)}}></input>
        <span>{length}</span>
    </div>
}

export default InputLength;