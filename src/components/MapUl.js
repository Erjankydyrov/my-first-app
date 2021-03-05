const MapUl = ({ items }) => {
    let list = items.map(item => {
        return <li>{item}</li>
    });

    return <ul>{list}</ul>
}

export default MapUl;