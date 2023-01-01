
import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import LeagueHomePage from "./LeagueHomePage";
import axios from "axios";
import TablePage from "./TablePage";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import PrintLeaguesBar from "./PrintLeaguesBar";
import HistoryResult from "./HistoryResult";
import RoundsTablePage from "./RoundsTablePage";

const API_URL="https://app.seker.live/fm1/";
const LEAGUES="leagues";


class App extends React.Component {
    state={
        leagues:[],

        currentLeague:"",
        pages:["Home","Table","History Results","Top Scorer","Stats"]
    }
    componentDidMount() {
        this.getLeagues();
    }


    getLeagues= () => {
        axios.get(API_URL + LEAGUES).then((response) => {
            this.setState({
                leagues: response.data,
            })
        });
    }


    setChosenLeague = (league) => {
        this.setState({
            currentLeague:league
        })

    }

  render() {
    return (
        <div className="App">
        <BrowserRouter>
            {window.location.pathname!=="/"&&<LeaguesNavLInkMenu league={this.state.currentLeague.name} pages={this.state.pages}/>}
            <Routes>
                <Route path={"/"} element={<HomePage leagues={this.state.leagues} choseLeague={this.setChosenLeague} pages={this.state.pages} />}/>
                <Route path={"/"+this.state.currentLeague.name+"/"+this.state.pages[0]} element={<LeagueHomePage leagues={this.state.leagues}  pages={this.state.pages} league={this.state.currentLeague} choseLeague={this.setChosenLeague} />}/>
                <Route path={"/"+this.state.currentLeague.name+"/"+this.state.pages[1]} element={<TablePage leagues={this.state.leagues} pages={this.state.pages} league={this.state.currentLeague} choseLeague={this.setChosenLeague}/>}/>
                <Route path={"/"+this.state.currentLeague.name+"/"+this.state.pages[2]} element={<RoundsTablePage leagues={this.state.leagues} pages={this.state.pages} league={this.state.currentLeague} choseLeague={this.setChosenLeague}/>}/>
            </Routes>
        </BrowserRouter>

        </div>
    );
  }
}

export default App;
