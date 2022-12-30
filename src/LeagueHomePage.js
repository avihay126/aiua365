import PrintPageTitle from "./PrintPageTitle";
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import LeaguesNavLInkMenu from "./LeaguesNavLInkMenu";
import PrintLeaguesBar from "./PrintLeaguesBar";

class LeagueHomePage extends React.Component{
    state={

    }
    render() {
        return(
            <div>
                <div>
                    <PrintPageTitle title={this.props.title+" league"}/>
                </div>
                <div>
                    <LeaguesNavLInkMenu pages={this.props.pages}/>
                </div>
                {/*<div>*/}
                {/*    <BrowserRouter>*/}
                {/*        <Routes>*/}
                {/*            <Route path={"/English"} element={"x"}/>*/}
                {/*        </Routes>*/}
                {/*    </BrowserRouter>*/}
                {/*</div>*/}

            </div>
        )
    }
}
export default LeagueHomePage;