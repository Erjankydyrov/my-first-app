import classes from "./ButtonTomato.module.css";

const ButtonTomato = ({children}) => {
    return ( <button className = {classes.ButtonTomato}>{children}</button>);
}
 
export default ButtonTomato;