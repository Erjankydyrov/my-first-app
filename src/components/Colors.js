import { useState } from "react";

function Colors({ value }) {

    let [color, setColor] = useState(value ?? "");

    return <div>
        <input type="color" 
        value = {color} 
        onInput={(event) => {setColor(event.target.value)}}></input>{color}
    </div>
}

export default Colors;