import classes from "./ButtonRedText.module.css";

const ButtonRedText = ({children}) => {
    return ( <button className = {classes.ButtonRedText}>{children}</button>);
}
 
export default ButtonRedText;