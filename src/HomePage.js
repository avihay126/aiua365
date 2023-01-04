import React from "react";
import PrintPageTitle from "./PrintPageTitle";
import PrintLeaguesBar from "./PrintLeaguesBar";
import PrintWaiting from "./PrintWaiting";


class HomePage extends React.Component{
    componentDidMount() {
        this.props.showNavLink()
    }
    render() {
            return(
                <div  >
                    <div>
                        <PrintPageTitle title={"Welcome to our sport web"}/>
                    </div>
                    {
                        this.props.load?
                            <div>
                                <b style={{color:"blue"}}> choose your league</b>
                                <PrintLeaguesBar currentPage={"Home"} leagues={this.props.leagues} choseLeague={this.props.choseLeague} page={this.props.pages[0]}/>
                            </div>
                            :
                            <PrintWaiting/>
                    }
                </div>
            );
        }
}
export default HomePage;