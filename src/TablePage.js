import React from "react";
import PagesTopMenu from "./PagesTopMenu";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";
const API_URL="https://app.seker.live/fm1/";

class TablePage extends React.Component{
    state={
        teams:[]
    }
    componentDidMount() {
     this.getTeams(this.props.league);
    }
    getTeams=(league)=>{
        axios.get(API_URL+"teams/"+league.id).
        then((response)=>{
        this.setState({
            teams:response.data
        })
        })
    }
    choseLeague=(league)=>{
       this.props.choseLeague(league);
        this.getTeams(league);
    }

    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name+" league"}/>
                </div>
                <div>
                    <PrintLeaguesBar currentPage={"Table"} leagues={this.props.leagues} choseLeague={this.choseLeague} page={"page"}/>
                </div>
                <div>
                    {this.state.teams.map((team)=>{
                        return(
                            <div>
                                {team.name}
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default TablePage;