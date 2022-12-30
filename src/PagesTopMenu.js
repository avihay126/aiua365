import PrintPageTitle from "./PrintPageTitle";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import React from "react";

function PagesTopMenu(props){
    return(
        <div>
            <div>
                <PrintPageTitle title={props.league+" league"}/>
            </div>
        </div>
    )
}
export default PagesTopMenu;