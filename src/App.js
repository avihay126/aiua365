
import './App.css';
import React from "react";
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import HomePage from "./HomePage";
import LeagueHomePage from "./LeagueHomePage";
import axios from "axios";

const API_URL="https://app.seker.live/fm1/";
const LEAGUES="leagues";


class App extends React.Component {
    state={
        leagues:[],
        currentLeague:"",
        pages:["Home","Table","HistoryResults","TopScorer","Stats"]
    }
    componentDidMount() {
        this.getLeagues();
    }

    getLeagues=()=>{
        axios.get(API_URL+LEAGUES).
        then((response)=>{
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
            <Routes>
                <Route path={"/"} element={<HomePage leagues={this.state.leagues} choseLeague={this.setChosenLeague} />}/>
                <Route path={"/"+this.state.currentLeague} element={<LeagueHomePage title={this.state.currentLeague} pages={this.state.pages} />}/>
            </Routes>
        </BrowserRouter>
            {this.state.currentLeague}
        </div>
    );
  }
}

export default App;
