import React from "react";

function PrintTable(props){

    return(
        <div>
            <div>
                <table id={"leagueTable"}>
                    <tr>
                        <th> Pos</th>
                        <th>Team Name</th>
                        <th>Matches</th>
                        <th>Scored</th>
                        <th>Conceded</th>
                        <th>Difference</th>
                        <th>Wins</th>
                        <th>Draw</th>
                        <th>Lose</th>
                        <th>Points</th>
                    </tr>
                    {

                        props.teams.map((team) => {

                        return (

                            <tr id={"rowTable"} className={team.position>props.teams.length-3?"bottom" :team.position} >
                                <td >
                                    {team.position}
                                </td>
                                <td id={"tableTeamName"} onClick={()=>props.teamSelected(team)}>
                                    {team.name}
                                </td>
                                <td>
                                    {team.numOfMatches}
                                </td>
                                <td>
                                    {team.scored}
                                </td>
                                <td>
                                    {team.conceded}
                                </td>
                                <td>
                                    {team.difference}
                                </td>
                                <td>
                                    {team.wins}
                                </td>
                                <td>
                                    {team.draw}
                                </td>
                                <td>
                                    {team.lose}
                                </td>
                                <td>
                                    {team.points}
                                </td>
                            </tr>




                        )


                    })
                    }
                </table>

            </div>
        </div>
    )
}
export default PrintTable;