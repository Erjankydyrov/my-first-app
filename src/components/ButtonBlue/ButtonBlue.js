import classes from "./ButtonBlue.module.css";

const ButtonBlue = ({children}) => {
    return ( <button className = {classes.ButtonBlue}>{children}</button>);
}
 
export default ButtonBlue;