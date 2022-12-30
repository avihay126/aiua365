import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import PrintNavLink from "./PrintNavLink";
function PrintLeaguesBar(props){

    return(
        <div >
            <table id={"leaguesBar"} state={"show"} className={props.page}>

                {
                    props.leagues.map((league)=>{
                        return(
                            <tr id={"rowBar"} onClick={()=>props.choseLeague(league)}>
                                <PrintNavLink url={"/"+league.name+"/"+props.currentPage}name={league.name +" league"}/>
                            </tr>
                        )

                    })
                }
            </table>

        </div>
    )
}

export default PrintLeaguesBar;