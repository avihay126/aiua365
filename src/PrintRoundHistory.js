import PrintSubTitle from "./PrintSubTitle";

function PrintRoundHistory(props){
    let round=0;
    return(
        <div id={"roundHistory"}>

            <PrintSubTitle title={props.title}/>
            {
                props.games.map((game)=>{
                    round++;
                    return(
                        <div className={"rowBlock"}>
                            {round+". "+game.homeTeamName+" "+game.homeTeamGoals+" - "+game.awayTeamGoals+" "+game.awayTeamName}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PrintRoundHistory;