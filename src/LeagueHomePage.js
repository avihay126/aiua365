import PrintPageTitle from "./PrintPageTitle";
import React from "react";
import PrintLeaguesBar from "./PrintLeaguesBar";


class LeagueHomePage extends React.Component{

    componentDidMount() {
        this.props.showNavLink();
        this.props.navStyleHome();
    }
    componentWillUnmount() {
        this.props.navStylePage();
    }

    render() {
        return (
            <div>
                <div>
                    <PrintPageTitle title={this.props.league.name + " league"}/>
                </div>
                <div className={"welcomeLeague"}>
                    welcome to {this.props.league.name} league page
                </div>
                <div>
                    <PrintLeaguesBar currentPage={this.props.pages[0]} leagues={this.props.leagues} choseLeague={this.props.choseLeague}
                                     page={"page"}/>
                </div>
            </div>
        )
    }


}

export default LeagueHomePage;