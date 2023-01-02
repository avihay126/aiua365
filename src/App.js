import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import LeagueHomePage from "./LeagueHomePage";
import axios from "axios";
import TablePage from "./TablePage";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import PrintLeaguesBar from "./PrintLeaguesBar";
import StatisticsPage from "./StatisticsPage";
import TopScorerPage from "./TopScorerPage";
import HistoryResultsPage from "./HistoryResultsPage";

const API_URL = "https://app.seker.live/fm1/";
const LEAGUES = "leagues";


class App extends React.Component {
    state = {
        leagues: [],
        currentLeague: {
            name: "",
            id: 0
        },
        pages: ["Home", "Table", "HistoryResults", "TopScorer", "Stats"]
    }

    componentDidMount() {
        this.getLeagues();
    }


    getLeagues = () => {
        axios.get(API_URL + LEAGUES).then((response) => {
            const leagueId = this.checkCurrentLeague(response.data);
            this.setState({
                leagues: response.data,
                currentLeague: {
                    name: response.data[leagueId].name,
                    id: response.data[leagueId].id
                }
            })
        });
    }
    checkCurrentLeague = (data) => {
        const temp = window.location.pathname;
        let currentLeague = "";
        let leagueId = 0;

        if (temp !== "/") {
            currentLeague = temp.split("/")[1]
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].name === currentLeague) {
                leagueId = i;
            }
        }
        return leagueId;
    }


    setChosenLeague = (league) => {
        this.setState({
            currentLeague: {
                name: league.name,
                id: league.id
            }
        })

    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {window.location.pathname !== "/" &&
                        <LeaguesNavLInkMenu league={this.state.currentLeague.name} pages={this.state.pages}/>}
                    <Routes>
                        <Route path={"/"}
                               element={<HomePage leagues={this.state.leagues} choseLeague={this.setChosenLeague}
                                                  pages={this.state.pages}/>}/>
                        <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[0]}
                               element={<LeagueHomePage leagues={this.state.leagues} pages={this.state.pages}
                                                        league={this.state.currentLeague}
                                                        choseLeague={this.setChosenLeague}/>}/>
                        <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[1]}
                               element={<TablePage leagues={this.state.leagues} pages={this.state.pages}
                                                   league={this.state.currentLeague}
                                                   choseLeague={this.setChosenLeague}/>}/>
                        <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[4]}
                               element={<StatisticsPage leagues={this.state.leagues} pages={this.state.pages}
                                                        league={this.state.currentLeague} choseLeague={this.setChosenLeague} />}/>}/>
                        <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[3]}
                               element={<TopScorerPage leagues={this.state.leagues} pages={this.state.pages}
                                                        league={this.state.currentLeague} choseLeague={this.setChosenLeague} />}/>}/>
                        <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[2]}
                               element={<HistoryResultsPage leagues={this.state.leagues} pages={this.state.pages}
                                                       league={this.state.currentLeague} choseLeague={this.setChosenLeague} />}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
