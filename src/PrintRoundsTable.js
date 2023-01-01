import React from "react";

function PrintRoundsTable(props){

    return(
        <div>
            <div>
                <table id={"roundsTable"}>
                    <tr>
                        <th>Round</th>
                        <th>Home team name</th>
                        <th>Home team goals</th>
                        <th> - </th>
                        <th>Away team goals</th>
                        <th>Away team name</th>
                    </tr>
                    {props.teams.map((team) => {
                        return (
                            <tr id={"rowTable"}>
                                <td>
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
export default PrintRoundsTable;