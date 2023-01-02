function PrintStatistics(props){
    return(
        <div id={"stats"}>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Goals
                </div>
                <div>
                    First Half: {props.stats.firstHalfGoals} Goals.
                </div>
                <div>
                    Second Half: {props.stats.secondHalfGoals} Goals.
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Minute
                </div>
                <div>
                    Earlier Goal: {props.stats.earlierGoal}'
                </div>
                <div>
                    Latest Goal: {props.stats.latestGoal}'
                </div>
            </div>
            <div className={"blockInStats"}>
                <div class="subTitle">
                    Round
                </div>
                <div>
                    The round with most Goals is: {props.stats.roundMostNumber} with {props.stats.roundMostGoal} Goals
                </div>
                <div>
                    The round with least Goals is: {props.stats.roundLeastNumber} with {props.stats.roundLeastGoal} Goals
                </div>
            </div>


        </div>
    )
}
export default PrintStatistics;