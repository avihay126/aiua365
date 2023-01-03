import React from "react";

function PrintSelect(props){
    let number=0
    return(
        <div>
            <select id={props.id} onChange={props.changed} value={props.value}>
                {
                    props.rounds.map((round)=>{
                        number++;
                        return(
                            <option>
                                {number}
                            </option>
                        )
                    })
                }

            </select>
        </div>
    )
}
export default PrintSelect;