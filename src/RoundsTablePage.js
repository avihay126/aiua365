import React from "react";
import PagesTopMenu from "./PagesTopMenu";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";
import PrintTable from "./PrintTable";
import PrintRoundsTable from "./PrintRoundsTable";
const API_URL="https://app.seker.live/fm1/";

class RoundsTablePage extends React.Component{
    state={
        rounds:[],
        teams:[],
        tableTeams:[]
    }
    componentDidMount() {
        this.getRound();
        debugger;
    }
    getRound=()=> {
        axios.get("https://app.seker.live/fm1/history/1").then((response) => {
            this.setState({
                rounds: response.data[1].round
            })
        })
    }

    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name+" league"}/>
                </div>
                <div>
                    <PrintLeaguesBar currentPage={"PrintRoundsTable"} leagues={this.props.leagues} choseLeague={this.choseLeague} page={"page"}/>
                </div>
                <div>
                    <PrintRoundsTable teams={this.state.tableTeams}/>
                </div>
                {/*   <div> Chose rounds to show: </div>*/}
                {/*   <div>from:</div>  <select>*/}
                {/*    <option>*/}
                {/*        {this.state.rounds}*/}
                {/*    </option>*/}
                {/*</select>*/}
                {/*    <div> to: </div>*/}
                {/*     <select>*/}
                {/*        <option>*/}
                {/*            {this.state.rounds}*/}
                {/*        </option>*/}
                {/*   </select>*/}
            </div>

        )
    }
}

export default RoundsTablePage;