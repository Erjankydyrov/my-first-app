import classes from "./ButtonGreen.module.css";

const ButtonGreen = ({children}) => {
    return ( <button className = {classes.ButtonGreen}>{children}</button>);
}
 
export default ButtonGreen;