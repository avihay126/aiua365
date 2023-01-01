import React from "react";
import PagesTopMenu from "./PagesTopMenu";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";
import PrintTable from "./PrintTable";
import PrintWaiting from "./PrintWaiting";
import PrintTeamPlayers from "./PrintTeamPlayers";
import PrintTeamHistory from "./PrintTeamHistory";
import PrintTeamDetails from "./PrintTeamDetails";

const API_URL = "https://app.seker.live/fm1/";

class TablePage extends React.Component {
    state = {
        load: false,
        tableTeams: [],
        teamSelected: false,
        teamPlayers: [],
        currentTeam: "",
        teamsHistory: [],
        currentTeamGames: []
    }

    async componentDidMount() {
        await this.getTeams(this.props.league.id);
    }

    getTeams = async (leagueId) => {
        axios.get(API_URL + "teams/" + leagueId).then((response) => {
            this.setState({
                load: false,
                teamSelected: false
            })
            this.getTableDetails(response.data)
        })
    }
    getTableDetails = async (teams) => {
        let temp = [];
        let teamsHistory = [];
        for (let i = 0; i < teams.length; i++) {
            const matches = await this.getTeamHistory(teams[i]);
            const id = teams[i].id;
            const name = teams[i].name;
            const numOfMatches = matches.length;
            const scored = this.getTeamGoals(matches, teams[i].id, true);
            const conceded = this.getTeamGoals(matches, teams[i].id, false);
            const difference = scored - conceded;
            const array = this.calculateTeamPoints(matches, teams[i].id);
            const points = array.points;
            const wins = array.wins;
            const draw = array.draw;
            const lose = matches.length - wins - draw;
            const team = {
                id: id,
                name: name,
                numOfMatches: numOfMatches,
                scored: scored,
                conceded: conceded,
                difference: difference,
                wins: wins,
                draw: draw,
                lose: lose,
                points: points
            }
            temp.push(team);
            const teamHistory = {
                id: id,
                name: name,
                matches: matches
            }
            teamsHistory.push(teamHistory);
        }

        temp = this.sortingTable(temp);
        for (let i = 0; i < temp.length; i++) {
            temp[i] = {
                ...temp[i],
                position: i + 1
            }
        }

        this.setState({
            tableTeams: temp,
            load: true,
            teamsHistory: teamsHistory
        })

    }
    getTeamHistory = async (team) => {
        const response = await axios.get("https://app.seker.live/fm1/history/" + team.league.id + "/" + team.id);
        const history = response.data;
        return history;
    }

    choseLeague = async (league) => {
        this.props.choseLeague(league);
        await this.getTeams(league.id);
    }
    getTeamGoals = (matches, teamId, conceded) => {
        let home = true;
        let scored = 0;
        for (let i = 0; i < matches.length; i++) {
            if (matches[i].awayTeam.id === teamId) {
                home = !conceded;
            } else {
                home = conceded;
            }
            let goals = matches[i].goals;
            for (let j = 0; j < goals.length; j++) {
                if (goals[j].home === home) {
                    scored++;
                }
            }
        }
        return scored;
    }
    calculateTeamPoints = (matches, teamId) => {
        let wins = 0;
        let draw = 0;
        let points = 0;
        let home = true;

        for (let i = 0; i < matches.length; i++) {
            if (matches[i].awayTeam.id === teamId) {
                home = false;
            } else {
                home = true;
            }
            let awayGoals = 0;
            let homeGoals = 0;
            const gameGoals = matches[i].goals;
            for (let j = 0; j < gameGoals.length; j++) {
                if (gameGoals[j].home === true) {
                    homeGoals++;
                } else {
                    awayGoals++;
                }
            }
            if (awayGoals === homeGoals) {
                draw++;
            } else if (awayGoals > homeGoals && home === false) {
                wins++;
            } else if (awayGoals < homeGoals && home === true) {
                wins++;
            }
        }
        points = (wins * 3) + draw;
        return {points, wins, draw};
    }
    sortingTable = (teams) => {
        teams.sort((a, b) => {
            if (a.points < b.points) {
                return 1;
            }
            if (a.points > b.points) {
                return -1;
            }
            if (a.difference < b.difference) {
                return 1;
            }
            if (a.difference > b.difference) {
                return -1;
            }
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0
        });
        return teams;

    }

    teamSelected = async (team) => {
        this.teamHistory(team);
        const response = await axios.get("https://app.seker.live/fm1/squad/" + this.props.league.id + "/" + team.id).then((response) => {
            const data = response.data;
            this.setState({
                currentTeam: team,
                teamPlayers: data,
                teamSelected: true,

            })
        })
    }
    teamHistory = (team) => {
        const history = this.state.teamsHistory;
        for (let i = 0; i < history.length; i++) {
            if (history[i].id === team.id) {
                const matches = history[i].matches;
                let games = [];
                for (let j = 0; j < matches.length; j++) {
                    const homeTeamName = matches[j].homeTeam.name;
                    const awayTeamName = matches[j].awayTeam.name;
                    const home = homeTeamName === team.name;
                    const homeTeamGoals = this.getGoalsInGame(matches[j].goals).homeTeamGoals;
                    const awayTeamGoals = this.getGoalsInGame(matches[j].goals).awayTeamGoals;
                    const round = matches[j].round;
                    const game = {
                        home: home,
                        homeTeamName: homeTeamName,
                        homeTeamGoals: homeTeamGoals,
                        awayTeamName: awayTeamName,
                        awayTeamGoals: awayTeamGoals,
                        round: round
                    }
                    games.push(game);
                }
                this.setState({
                    currentTeamGames: games
                })
                break;
            }
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

    render() {
        return (
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league- " + this.props.pages[1]}/>
                </div>
                {
                    this.state.load ?
                        <div>
                            <div>
                                <PrintLeaguesBar currentPage={"Table"} leagues={this.props.leagues}
                                                 choseLeague={this.choseLeague}
                                                 page={"page"}/>
                            </div>
                            <div>
                                <PrintTable teams={this.state.tableTeams} teamSelected={this.teamSelected}/>
                            </div>
                            <div>
                                {
                                    this.state.teamSelected ?
                                        <div>
                                            <PrintTeamDetails team={this.state.currentTeam}
                                                              players={this.state.teamPlayers}
                                                              games={this.state.currentTeamGames}/>
                                        </div>

                                        :
                                        undefined
                                }

                            </div>
                        </div>
                        :
                        <div>
                            <PrintWaiting/>
                        </div>
                }

            </div>


        )
    }
}

export default TablePage;