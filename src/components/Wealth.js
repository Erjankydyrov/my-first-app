const Wealth = ({ items }) => {
    let list = items.map(item => {
        console.log(item)
        return <li>{item.name} - {item.wealth}</li>;
    });

    return <ul>{list}</ul>
}

export default Wealth;