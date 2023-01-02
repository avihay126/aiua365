import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import axios from "axios";
import PrintTopScorer from "./PrintTopScorer";
import PrintWaiting from "./PrintWaiting";

class TopScorerPage extends React.Component{
    state={
        playersList:[],
        load:false

    }

componentDidMount() {
        this.getHistory(this.props.league)
}
    getHistory=(league)=>{
        axios.get("https://app.seker.live/fm1/history/"+league.id).
        then((response)=>{
            const players=this.getPlayerList(response.data)
            this.getTopScorer(players);
        })
    }
    getPlayerList=(history)=>{
        let players =[];
        for (let i = 0; i <history.length ; i++) {
            for (let j = 0; j < history[i].goals.length; j++) {
                players.push( history[i].goals[j].scorer)
            }
        }
        return players;
    }
    getTopScorer=(players)=>{
        let temp1 =[];
        for (let i = 0; i <players.length ; i++) {
            let counter=1;
            for (let j =i+1; j <players.length ; j++) {
                if (players[i].id===players[j].id)
                    counter++
            }
            const player= {
                firstName: players[i].firstName,
                lastName: players[i].lastName,
                id:players[i].id,
                goals:counter,
            }
            temp1.push(player)
        }
        temp1=this.removeDuplicatePlayers(temp1);
        temp1=this.sortByGoals(temp1);
        let temp2=[];
        for (let i = 0; i <=2 ; i++) {
            temp2.push(temp1[i])
        }
        this.setState({
            playersList: temp2,
            load:true
        })
    }
    removeDuplicatePlayers=(players)=>{
        let temp=players.filter((player1, index, self) =>
            index === self.findIndex((player2) => (
                player2.id === player1.id
            )))
        return temp;
    }
    sortByGoals=(players)=>{
       players= players.sort((player1,player2)=>{
            if (player1.goals>player2.goals){
                return-1;
            }
            if (player2.goals>player1.goals){
                return 1
            }
            return 0;
        })
        return players;
    }

    choseLeague = async (league) => {
        this.props.choseLeague(league);
        this.getHistory(league)
    }

    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league- " + this.props.pages[3]}/>
                </div>
                {
                    this.state.load?
                        <div>
                            <div>
                                <PrintLeaguesBar currentPage={this.props.pages[3]} leagues={this.props.leagues}
                                                 choseLeague={this.choseLeague}
                                                 page={"page"}/>
                            </div>
                            <div>
                                <PrintTopScorer players={this.state.playersList}/>
                            </div>

                        </div>
                        :
                        <PrintWaiting/>
                }
            </div>
        )
    }


}
export default TopScorerPage;