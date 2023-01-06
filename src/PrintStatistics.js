function PrintStatistics(props){
    return(
        <div id={"stats"}>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Goals
                </div>
                <div>
                    First Half: <b> {props.stats.firstHalfGoals} Goals.</b>
                </div>
                <div>
                    Second Half: <b> {props.stats.secondHalfGoals} Goals. </b>
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Minute
                </div>
                <div>
                    Earlier Goal: <b>{props.stats.earlierGoal}'</b>
                </div>
                <div>
                     Latest Goal:<b> {props.stats.latestGoal}'</b>
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Round
                </div>
                <div>
                    The <b >round</b> with
                    most goals is-<b>{props.stats.roundMostNumber}</b>
                    with <b>{props.stats.roundMostGoal} Goals</b>
                </div>
                <div>
                    The <b>round</b> with least goals is-
                    <b >{props.stats.roundLeastNumber}</b> with
                    <b >{props.stats.roundLeastGoal} Goals</b>
                </div>
            </div>


        </div>
    )
}
export default PrintStatistics;