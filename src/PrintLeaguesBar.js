import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import PrintNavLink from "./PrintNavLink";
import React from "react";
function PrintLeaguesBar(props){

    return(
        <div >
            <table id={"leaguesBar"} state={"show"} className={props.page}>
                <b > choose your league</b>
                {
                    props.leagues.map((league)=>{
                        return(
                            <tr id={"rowBar"} >
                                <PrintNavLink onClick={()=>props.choseLeague(league)}     url={"/"+league.name+"/"+props.currentPage}name={league.name +" league"}/>
                            </tr>
                        )

                    })
                }
            </table>

        </div>
    )
}

export default PrintLeaguesBar;