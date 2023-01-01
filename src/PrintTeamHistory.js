function PrintTeamHistory(props){
    return(
        <div id={"teamHistory"}>
            <div className={"subTitle"}>
                HISTORY:
            </div>
            {
                props.games.map((game)=>{
                    return(
                        <div className={"rowBlock"}>
                            {game.round+". "+game.homeTeamName+" "+game.homeTeamGoals+" - "+game.awayTeamGoals+" "+game.awayTeamName}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PrintTeamHistory;