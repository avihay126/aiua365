function PrintTeamPlayers(props){
    let numbering=0;
    return(
        <div className={"playersList"}>
            <div className={"subTitle"}>
                PLAYERS:
            </div>
            {

                props.players.map((player)=>{
                    numbering++;
                    return(
                        <div className={"rowBlock"} >
                            {numbering+". "+player.firstName+"     "+player.lastName}
                        </div>
                    )

                })
            }
        </div>
    )
}
export default PrintTeamPlayers;