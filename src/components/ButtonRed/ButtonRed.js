import classes from "./ButtonRed.module.css";

const ButtonRed = ({children}) => {
    return ( <button className = {classes.ButtonRed}>{children}</button>);
}
 
export default ButtonRed;