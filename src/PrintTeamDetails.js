import PrintTeamPlayers from "./PrintTeamPlayers";
import PrintTeamHistory from "./PrintTeamHistory";

function PrintTeamDetails(props){
    return(
        <div id={"teamDetails"}>
            <div id={"teamTitle"}>
                {props.team.name}
            </div>
            <div>
                <PrintTeamPlayers team={props.team} players={props.players}/>
                <PrintTeamHistory games={props.games}/>
            </div>

        </div>
    )
}
export default PrintTeamDetails;