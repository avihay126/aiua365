import {NavLink} from "react-router-dom";
function PrintNavLink(props){

    return(

        <span>
                 <NavLink onClick={props.onClick} id={"navLink"} className={({isActive})=>isActive? "isActive": undefined} to={props.url}>{props.name} </NavLink>
        </span>

    )
}

export default PrintNavLink;