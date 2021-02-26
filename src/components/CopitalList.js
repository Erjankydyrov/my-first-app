const CopitalList = ({ items }) => {
    let list = items.map(item => {
        console.log(item)
        return <li>{item[0].toUpperCase()}</li>;
    });

    return <ul>{list}</ul>
}

export default CopitalList;