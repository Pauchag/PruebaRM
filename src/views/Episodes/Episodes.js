import React, { Component } from 'react'
//import axios from 'axios';
import Logo from '../../logo.png'
import Profile from "../../profile.png"
import { Card } from "../Episodes/cards"
import "../Episodes/Episodes.css"
import { Link } from "react-router-dom";


export class Episodes extends Component {
    state = {
        order:false,
        seasons:[],
        picture:""
    } 

/*     componentDidMount(){
        console.log('Hola')
        this.getCharactersByName()
    }
*/

renderSeasons=()=>{
        console.log(this.state.seasons)
        return this.state.seasons.map(season => {
            return( 
                <div>
                    <button onClick={()=>this.showOrder(season.picture)}>
                            <Card picture={season.picture}/>
                    </button>
                </div>
            )
        })
    }

    showOrder=(picture)=>{
        this.setState({
            order:!this.state.order,
            picture:picture
        })
    }

    displayOrder = () => {
        if(this.state.order){
            return(
                <div className="o-container">
                    <div className="r-navbar">
                        <Link to="/">
                            <img src={Logo} alt="Smiley face" />
                        </Link>
                        <Link to="/">
                            <span>About us</span>
                        </Link>
                        <span onClick={this.showOrder}>Characters</span>
                        <span>Episodes</span>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="first-image">
                            <img src={this.state.picture} alt="Smiley face"/>
                        </div>
                        <div className="second-image">
                            <img src={this.state.picture} alt="Smiley face"/>
                    </div>

                    <div className="info">
                        <ul>
                            <li>
                                Name
                            </li>
                            <li>
                                Species
                            </li>
                            <li>
                                Location
                            </li>
                            <li>
                                Gender
                            </li>
                            <li>
                                Origin
                            </li>
                        </ul>
                        <button className="button-check">More info</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    showSeasons=()=>{
        const self = this;
        if(!this.state.order){
            return(
                <div>
                    <div className="r-navbar">
                        <Link to="/">
                            <img src={Logo} alt="Smiley face" />
                        </Link>
                        <Link to="/">
                            <span>About us</span>
                        </Link>
                        <Link to="/Characters">
                        <span onClick={this.showRentar}>Characters</span>
                        </Link>
                        <span>Episodes</span>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>

                    <div className="info-container">

                        <div className="left">
                            <span className="left-header">Seasons</span>
                            <ul>
                                <li>Season 1</li>
                                <li>Season 2</li>
                                <li>Season 3</li>
                                <li>Season 4</li>

                            </ul>

                            <span className="left-header">Dimensions</span>
                            <ul>
                                <li>Wasteland</li>
                                <li>Dog Dimension</li>
                                <li>Toilet Dimension</li>
                                <li>Furniture/Pizza/Phone Worlds</li>

                            </ul>

                        </div>

                        <div className="seasons-container">
                        {
                            self.renderSeasons()
                        }
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="r-top-container">
                {
                    this.showSeasons()
                }
                {
                    this.displayOrder()
                }
            </div>
        )
    }
}

  export default Episodes