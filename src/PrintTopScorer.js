import React from "react";


function PrintTopScorer(props){
    let numbering=0;
    return(
        <div  id={"topScorer"}>
            <div className={"subTitle"}>
                TopScorer:
            </div>
            <table>
                <tr>
                    <th>Pos</th>
                    <th>Name</th>
                    <th>Goals</th>
                </tr>

            {
                        props.players.map((player)=>{
                            numbering++
                            return(
                                <tr id={"rowTable"}>
                                    <td>{numbering}</td>
                                    <td>{player.firstName} {player.lastName}</td>
                                    <td>{player.goals}</td>
                                </tr>
                            )

                        })
            }
            </table>
        </div>
    )
}
export default PrintTopScorer;