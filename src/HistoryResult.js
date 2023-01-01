import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import HomePage from "./HomePage";
import LeagueHomePage from "./LeagueHomePage";
import TablePage from "./TablePage";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import PrintTable from "./PrintTable";
import PrintRoundsTable from "./PrintRoundsTable";
class HistoryResult extends React.Component{
    state={
        rounds:[],
    }
    componentDidMount() {
        this.getRound();
    }

    render() {
        return(
            <div  >
                <div> <PrintPageTitle title={this.props.league.name+" league"}/></div>
                <div>
                    <PrintLeaguesBar currentPage={"PrintRoundsTable"} leagues={this.props.leagues} choseLeague={this.props.choseLeague} page={"page"}/>

                </div>


            </div>
        );

    }



}
export default HistoryResult;