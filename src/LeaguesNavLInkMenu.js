import {NavLink} from "react-router-dom";
import React from "react";
import PrintNavLink from "./PrintNavLink";

function LeaguesNavLInkMenu(props){
    return(
        <div id={"leagueMenu"}>
            <PrintNavLink url={"table"}name={props.pages[0]}/>
            <PrintNavLink url={"1"}name={props.pages[1]}/>
            <PrintNavLink url={"1"}name={props.pages[2]}/>
            <PrintNavLink url={"1"}name={props.pages[3]}/>
            <PrintNavLink url={"1"}name={props.pages[4]}/>

        </div>
    )
}
export default LeaguesNavLInkMenu;