import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import axios from "axios";
import PrintLeaguesBar from "./PrintLeaguesBar";

class StatisticsPage extends React.Component {

    state={
        history:[],
        stats:{}
    }


    async componentDidMount() {
       await this.getHistory(this.props.league)
    }

    getHistory= async (league)=>{
        const response = await axios.get("https://app.seker.live/fm1/history/" +league.id);
        const history = response.data;
        this.getStats(history)
        this.setState({
            history:history
        })
    }
    choseLeague = async (league) => {
        this.props.choseLeague(league);
        await this.getHistory(league);
    }

    getStats=(history)=>{
        let firstHalfGoals=0;
        let secondHalfGoals=0;
        let earlierGoal=90;
        let latestGoal=0;


        let rounds=new Array(history[history.length-1].round+1).fill(0)
        for (let i = 0; i < history.length; i++) {
            const goals=history[i].goals;

            rounds[history[i].round]+=goals.length;

            for (let j = 0; j < goals.length; j++) {
                if (goals[j].minute<45){
                    firstHalfGoals++;
                }else {
                    secondHalfGoals++;
                }
                if (earlierGoal>goals[j].minute){
                    earlierGoal=goals[j].minute
                }
                if (latestGoal<goals[j].minute){
                    latestGoal=goals[j].minute
                }
            }
        }
        let roundMostGoal=rounds[1];
        let roundLeastGoal=rounds[1];
        let indexMax=1;
        let indexMin=1;
        for (let i = 1; i < rounds.length; i++) {
            if (rounds[i]>roundMostGoal){
                roundMostGoal=rounds[i];
                indexMax=i;
            }else if (rounds[i]<roundLeastGoal){
                roundLeastGoal=rounds[i];
                indexMin=i;
            }
        }
        debugger
        const stats={
            firstHalfGoals:firstHalfGoals,
            secondHalfGoals:secondHalfGoals,
            earlierGoal:earlierGoal,
            latestGoal:latestGoal,
            roundMostGoal:roundMostGoal,
            roundMostNumber:indexMax,
            roundLeastGoal:roundLeastGoal,
            roundLeastNumber:indexMin



        }
        this.setState({
            stats:stats
        })

    }


    render() {
        return (
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league- " + this.props.pages[4]}/>
                </div>
                <div>
                    <div>
                        <PrintLeaguesBar currentPage={"Stats"} leagues={this.props.leagues}
                                         choseLeague={this.choseLeague}
                                         page={"page"}/>
                    </div>
                    <div>
                        {this.state.stats.firstHalfGoals}
                        {this.state.stats.secondHalfGoals}
                        {this.state.stats.earlierGoal}
                        {this.state.stats.latestGoal}
                        {this.state.stats.roundMostGoal}
                        {this.state.stats.roundLeastGoal}
                        {this.state.stats.roundMostNumber}
                        {this.state.stats.roundLeastNumber}



                    </div>
                </div>
            </div>
        )

    }
}
export default StatisticsPage;