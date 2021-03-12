import classes from "./ButtonColors.module.css";

const ButtonColors = ({children}) => {
    return ( <button className = {classes.ButtonColors}>{children}</button>);
}
 
export default ButtonColors;