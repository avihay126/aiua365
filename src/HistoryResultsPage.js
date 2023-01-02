import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";

class HistoryResultsPage extends React.Component{
    state={
        numOfRounds:0,
        minInput:0,
        maxInput:0,
    }
    componentDidMount() {
        this.getHistory(this.props.league);
    }

    getHistory=(league)=>{
        axios.get("https://app.seker.live/fm1/history/"+league.id).
        then((response)=>{
           const games=response.data;
           this.temp(games)
           this.setState({
               numOfRounds:games[games.length-1].round,
               maxInput:games[games.length-1].round,
               minInput:1
           })
        })
    }
    temp=(games)=>{
        const rounds=games[games.length-1].round;
        let temp=Array.from(Array(rounds + 1), () => []);
        for (let i = 0; i < games.length; i++) {
            const game=games[i]
            const round=game.round;
            const homeTeamName = game.homeTeam.name;
            const awayTeamName = game.awayTeam.name;
            const homeTeamGoals = this.getGoalsInGame(game.goals).homeTeamGoals;
            const awayTeamGoals = this.getGoalsInGame(game.goals).awayTeamGoals;
            debugger
            const match={
                homeTeamName:homeTeamName,
                homeTeamGoals:homeTeamGoals,
                awayTeamName:awayTeamName,
                awayTeamGoals:awayTeamGoals
            }
            debugger;
            temp[round].push(match);
        }
    }
    getGoalsInGame = (goals) => {
        let homeTeamGoals = 0;
        let awayTeamGoals = 0;
        for (let i = 0; i < goals.length; i++) {
            if (goals[i].home === true) {
                homeTeamGoals++;
            } else {
                awayTeamGoals++;
            }
        }
        return {
            homeTeamGoals: homeTeamGoals,
            awayTeamGoals: awayTeamGoals
        }
    }

    choseLeague = async (league) => {
        this.props.choseLeague(league);
        this.getHistory(league)
    }
    changed=(event)=>{
        if (event.target.value<=this.state.numOfRounds&&event.target.value>0||event.target.value==="") {
            if (event.target.id === "minInput") {
                this.setState({
                    minInput: event.target.value
                })
            } else {
                this.setState({
                    maxInput: event.target.value
                })
            }
        }
    }

    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league- " + this.props.pages[2]}/>
                </div>
                <div>
                    {this.state.numOfRounds}
                    <input id={"minInput"} type={"number"} min={1} max={this.state.numOfRounds} value={this.state.minInput} onChange={this.changed}/>
                    <input id={"maxInput"} type={"number"} min={1} max={this.state.numOfRounds} value={this.state.maxInput} onChange={this.changed} />
                </div>
                <div>
                    <PrintLeaguesBar currentPage={this.props.pages[2]} leagues={this.props.leagues}
                                     choseLeague={this.choseLeague}
                                     page={"page"}/>
                </div>
            </div>
        )
    }


}

export default HistoryResultsPage;