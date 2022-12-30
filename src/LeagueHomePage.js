import PrintPageTitle from "./PrintPageTitle";
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import PrintLeaguesBar from "./PrintLeaguesBar";
import TablePage from "./TablePage";
import PagesTopMenu from "./PagesTopMenu";

class LeagueHomePage extends React.Component{
    state={

    }
    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name+" league"}/>
                </div>
                <div>
                    welcome to {this.props.league.name} league page
                </div>
                <div>
                    <PrintLeaguesBar currentPage={"Home"} leagues={this.props.leagues} choseLeague={this.props.choseLeague} page={"page"}/>
                </div>
            </div>
        )
    }
}
export default LeagueHomePage;