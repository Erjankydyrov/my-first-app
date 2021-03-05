const UlList = ({ items }) => {
    let list = [];
    items.forEach(item => {
        list.push(<li>{item}</li>)
    });

    return <ul>{list}</ul>
}

export default UlList;