import PrintSelect from "./PrintSelect";
import React from "react";
import PrintRoundHistory from "./PrintRoundHistory";


function PrintHistoryResults(props){
    let temp=props.rounds.slice(props.minInput-1,props.maxInput);
    return(
        <div>
            <div>
                <PrintSelect id={props.minInputId} rounds={props.rounds} changed={props.changed} value={props.minInput}/>
                <PrintSelect id={props.maxInputId} rounds={props.rounds} changed={props.changed} value={props.maxInput}/>
            </div>
            <div>
                {
                    temp.map((round) => {
                        return (
                            <div>
                                {
                                    <PrintRoundHistory  games={round} title={"Round: "+round[0].round}/>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PrintHistoryResults;