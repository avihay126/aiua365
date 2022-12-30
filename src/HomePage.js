import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";


class HomePage extends React.Component{
    state={

    }

    render() {
        return(
            <div  >
                <div>
                    <PrintPageTitle title={"Welcome"}/>
                </div>
                <div>
                    <PrintLeaguesBar currentPage={"Home"} leagues={this.props.leagues} choseLeague={this.props.choseLeague} page={"homePage"}/>
                </div>

            </div>
        );

    }
}
export default HomePage;