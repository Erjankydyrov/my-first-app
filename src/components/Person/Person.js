import classes from "./Person.module.css";

const Person = ({ name, age, children }) => {
    return (<div className={classes.Person}>
        <h2>{ name }</h2>
        <h4 className={classes.Age} className = {classes.Cusis}>{ age } years old</h4>
        <h5>{ children }</h5>
        <span className={classes.Name}>Hello</span>
    </div>);
}
export default Person;