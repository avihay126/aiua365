import {NavLink} from "react-router-dom";
import React from "react";
import PrintNavLink from "./PrintNavLink";
import LeagueHomePage from "./LeagueHomePage";

function LeaguesNavLInkMenu(props){
    return(
        <div id={"navLinkLeagueMenu"} className={props.page}>
            <PrintNavLink url={props.league+"/"+props.pages[0]}name={props.pages[0]}/>
            <PrintNavLink url={props.league+"/"+props.pages[1]}name={props.pages[1]}/>
            <PrintNavLink url={props.league+"/"+props.pages[2]}name={props.pages[2]}/>
            <PrintNavLink url={props.league+"/"+props.pages[3]}name={props.pages[3]}/>
            <PrintNavLink url={props.league+"/"+props.pages[4]}name={props.pages[4]}/>
        </div>
    )
}
export default LeaguesNavLInkMenu;