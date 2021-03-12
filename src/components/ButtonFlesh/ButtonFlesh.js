import classes from "./ButtonFlesh.module.css";

const ButtonFlesh = ({children}) => {
    return ( <button className = {classes.ButtonFlesh}>{children}</button>);
}
 
export default ButtonFlesh;