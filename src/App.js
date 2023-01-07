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
import NotFoundPage from "./NotFoundPage";
import PrintWaiting from "./PrintWaiting";

const API_URL = "https://app.seker.live/fm1/";
const LEAGUES = "leagues";
const HOME_PAGE = "/";
const HOME = 0, TABLE = 1, HISTORY_RESULTS = 2, TOP_SCORER = 3, STATS = 4;


class App extends React.Component {
    state = {
        leagues: [],
        currentLeague: {
            name: "",
            id: 0
        },
        pages: ["Home", "Table", "History Results", "Top Scorer", "Stats"],
        load: false,
        showNavLink: false,
        leagueHomePage: false
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
                },
                load: true,

            })
        });
    }
    checkCurrentLeague = (data) => {
        const temp = window.location.pathname;
        let currentLeague = "";
        let leagueId = 0;
        if (temp !== HOME_PAGE) {
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
    showMenu = () => {
        this.setState({
            showNavLink: true
        })
    }
    hideMenu = () => {
        this.setState({
            showNavLink: false
        })
    }
    isLeagueHomePage = () => {
        this.setState({
            leagueHomePage: true
        })
    }
    isNotLeagueHomePage = () => {
        this.setState({
            leagueHomePage: false
        })
    }


    render() {
        return (
            <div className="App">
                {
                    this.state.load ?
                        <div>
                            <BrowserRouter>
                                {this.state.showNavLink &&
                                    <LeaguesNavLInkMenu league={this.state.currentLeague.name} pages={this.state.pages}
                                                        page={this.state.leagueHomePage ? "leagueHome" : undefined}/>}
                                <Routes>
                                    <Route path={"*"} element={<NotFoundPage/>}/>
                                    <Route path={HOME_PAGE}
                                           element={<HomePage leagues={this.state.leagues}
                                                              choseLeague={this.setChosenLeague}
                                                              pages={this.state.pages} load={this.state.load}
                                                              showNavLink={this.hideMenu}/>}/>
                                    <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[HOME]}
                                           element={<LeagueHomePage leagues={this.state.leagues}
                                                                    pages={this.state.pages}
                                                                    navStylePage={this.isNotLeagueHomePage}
                                                                    league={this.state.currentLeague}
                                                                    navStyleHome={this.isLeagueHomePage}
                                                                    choseLeague={this.setChosenLeague}
                                                                    showNavLink={this.showMenu}/>}/>
                                    <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[TABLE]}
                                           element={<TablePage leagues={this.state.leagues} pages={this.state.pages}
                                                               league={this.state.currentLeague}
                                                               choseLeague={this.setChosenLeague}
                                                               showNavLink={this.showMenu}/>}/>
                                    <Route path={"/" + this.state.currentLeague.name + "/" + this.state.pages[STATS]}
                                           element={<StatisticsPage leagues={this.state.leagues}
                                                                    pages={this.state.pages}
                                                                    league={this.state.currentLeague}
                                                                    choseLeague={this.setChosenLeague}
                                                                    showNavLink={this.showMenu}/>}/>}/>
                                    <Route
                                        path={"/" + this.state.currentLeague.name + "/" + this.state.pages[TOP_SCORER]}
                                        element={<TopScorerPage leagues={this.state.leagues} pages={this.state.pages}
                                                                league={this.state.currentLeague}
                                                                choseLeague={this.setChosenLeague}
                                                                showNavLink={this.showMenu}/>}/>}/>
                                    <Route
                                        path={"/" + this.state.currentLeague.name + "/" + this.state.pages[HISTORY_RESULTS]}
                                        element={<HistoryResultsPage leagues={this.state.leagues}
                                                                     pages={this.state.pages}
                                                                     league={this.state.currentLeague}
                                                                     choseLeague={this.setChosenLeague}
                                                                     showNavLink={this.showMenu}/>}/>}/>
                                </Routes>
                            </BrowserRouter>
                        </div>
                        :
                        <PrintWaiting/>
                }

            </div>
        );
    }
}

export default App;
