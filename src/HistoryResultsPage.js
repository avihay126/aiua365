import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";
import PrintSelect from "./PrintSelect";
import PrintRoundHistory from "./PrintRoundHistory";
import PrintHistoryResults from "./PrintHistoryResults";
import PrintWaiting from "./PrintWaiting";

class HistoryResultsPage extends React.Component {
    state = {
        minInput: 0,
        maxInput: 0,
        rounds: [],
        load:false
    }

    componentDidMount() {
        this.getHistory(this.props.league);
    }

    getHistory = (league) => {
        axios.get("https://app.seker.live/fm1/history/" + league.id).then((response) => {
            const games = response.data;
            this.getRounds(games)
            this.setState({
                numOfRounds: games[games.length - 1].round,
                maxInput: games[games.length - 1].round,
                minInput: 1
            })
        })
    }
    getRounds = (games) => {
        const rounds = games[games.length - 1].round;
        let temp = Array.from(Array(rounds), () => []);
        for (let i = 0; i < games.length; i++) {
            const game = games[i]
            const round = game.round;
            const homeTeamName = game.homeTeam.name;
            const awayTeamName = game.awayTeam.name;
            const homeTeamGoals = this.getGoalsInGame(game.goals).homeTeamGoals;
            const awayTeamGoals = this.getGoalsInGame(game.goals).awayTeamGoals;
            const match = {
                round:round,
                homeTeamName: homeTeamName,
                homeTeamGoals: homeTeamGoals,
                awayTeamName: awayTeamName,
                awayTeamGoals: awayTeamGoals
            }
            temp[round - 1].push(match);
        }
        this.setState({
            rounds: temp,
            load:true
        })

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


    changed = (event) => {
        const value=Number(event.target.value);
       if (event.target.id==="minInput"&&value<=this.state.maxInput){

           this.setState({
               minInput:value
           })
       }else if(event.target.id==="maxInput"&&value>=this.state.minInput) {
           this.setState({
               maxInput:value
           })
       }
    }

    render() {
        return (
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league- " + this.props.pages[2]}/>
                </div>
                {
                    this.state.load?
                        <div>
                            <div>
                                <PrintHistoryResults minInput={this.state.minInput}maxInput={this.state.maxInput}
                                                     minInputId={"minInput"} maxInputId={"maxInput"} rounds={this.state.rounds}
                                                     changed={this.changed}/>
                            </div>
                            <div>
                                <PrintLeaguesBar currentPage={this.props.pages[2]} leagues={this.props.leagues}
                                                 choseLeague={this.choseLeague}
                                                 page={"page"}/>
                            </div>
                        </div>
                        :
                        <PrintWaiting/>

                }
            </div>
        )
    }


}

export default HistoryResultsPage;