function Water(props) {
    let state = "ice";
    if (props.wnt) {
        state = "water"
    }

    return <div>Water is {state}</div>
}

export default Water;