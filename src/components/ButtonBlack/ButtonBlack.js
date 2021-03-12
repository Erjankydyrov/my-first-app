import classes from "./ButtonBlack.module.css";

const ButtonBlack = ({children}) => {
    return ( <button className = {classes.ButtonBlack}>{children}</button>);
}
 
export default ButtonBlack;