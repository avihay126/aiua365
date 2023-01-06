import PrintSubTitle from "./PrintSubTitle";

function PrintRoundHistory(props){
    let round=0;
    return(
        <div id={"roundHistory"} className={props.type}>

            <PrintSubTitle title={props.title}/>
            <table>
                    <tr>
                        <td></td>
                        <th> Home</th>
                        <td></td>
                        <th>VS</th>
                        <td> </td>
                        <th> Away</th>
                    </tr>
                {
                props.games.map((game)=>{
                    round++;
                    return(
                        <tr className={"rowBlock"}>
                            <td>{round}.</td>
                            <td>{game.homeTeamName} </td>
                            <td> <b>{game.homeTeamGoals}</b>  </td>
                            <td> - </td>
                            <td> <b>{game.awayTeamGoals}</b>  </td>
                            <td>{game.awayTeamName} </td>
                        </tr>
                        // <div className={"rowBlock"}>
                        //     {round+". "+game.homeTeamName+" "+game.homeTeamGoals+" - "+game.awayTeamGoals+" "+game.awayTeamName}
                        // </div>
                    )
                })

            }
            </table>
        </div>
    )
}
export default PrintRoundHistory;