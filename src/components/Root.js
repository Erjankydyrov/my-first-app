const Root = ({ items }) => {
    let list = items.map(item => {
        console.log(item)
        return <li>{Math.sqrt(item)}</li>;
    });

    return <ul>{list}</ul>
}

export default Root;