function PrintStatistics(props){
    return(
        <div id={"stats"}>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Goals
                </div>
                <div style={{fontFamily:"sans-serif"}}>
                    First Half: <b style={{color:"blue"}}> {props.stats.firstHalfGoals} Goals.</b>
                </div>
                <div>
                    Second Half: <b style={{color:"blue"}}> {props.stats.secondHalfGoals} Goals. </b>
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Minute
                </div>
                <div>
                    Earlier Goal: <b style={{color:"blue"}} color={"blue"}>{props.stats.earlierGoal}'</b>
                </div>
                <div>
                     Latest Goal:<b style={{color:"blue"}}> {props.stats.latestGoal}'</b>
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Round
                </div>
                <div>
                    The <b style={{color:"blue"}}>round</b> with
                    most goals is-<b style={{color:"blue"}}>{props.stats.roundMostNumber}</b>
                    with <b style={{color:"blue"}}>{props.stats.roundMostGoal} Goals</b>
                </div>
                <div>
                    The <b style={{color:"blue"}}>round</b> with least goals is-
                    <b style={{color:"blue"}}>{props.stats.roundLeastNumber}</b> with
                    <b style={{color:"blue"}}>{props.stats.roundLeastGoal} Goals</b>
                </div>
            </div>


        </div>
    )
}
export default PrintStatistics;