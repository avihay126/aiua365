import PrintPageTitle from "./PrintPageTitle";
import React from "react";
import PrintLeaguesBar from "./PrintLeaguesBar";


function LeagueHomePage(props) {

    return (
        <div>
            <div>
                <PrintPageTitle title={props.league.name + " league"}/>
            </div>
            <div>
                welcome to {props.league.name} league page
            </div>
            <div>
                <PrintLeaguesBar currentPage={props.pages[0]} leagues={props.leagues} choseLeague={props.choseLeague}
                                 page={"page"}/>
            </div>
        </div>
    )
}

export default LeagueHomePage;