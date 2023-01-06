import PrintTeamPlayers from "./PrintTeamPlayers";
import PrintRoundHistory from "./PrintRoundHistory";

function PrintTeamDetails(props){
    return(
        <div id={"teamDetails"}>
            <div id={"teamTitle"}>
                {props.team.name}
            </div>
            <div>
                <PrintTeamPlayers team={props.team} players={props.players}/>
                <PrintRoundHistory type={"teamGames"} games={props.games} title={"HISTORY:"}/>
            </div>

        </div>
    )
}
export default PrintTeamDetails;