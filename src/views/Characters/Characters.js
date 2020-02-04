import React, { Component } from 'react'
//import axios from 'axios';
import Logo from '../../logo.png'
import Profile from "../../profile.png"
import Card from "../Characters/card"
import '../Characters/Characters.css';
import { Link } from "react-router-dom";

export class Characters extends Component {
    state = {
        order:false,
        characters:[],
        image:""
    } 

     /* componentDidMount(){
        console.log('Hola')
        this.getCharactersByName()
    } */


    renderCharacters=()=>{
        console.log(this.state.characters)
        return this.state.characters.map(character => {
            return( 
                <div>
                    <button onClick={()=>this.showOrder(character.image)}>
                            <Card image={character.image}/>
                    </button>
                </div>
            )
        })
    }

    showOrder=(image)=>{
        this.setState({
            order:!this.state.order,
            image:image
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
                        <Link to="/Episodes">
                        <span>Episodes</span>
                        </Link>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>
                    <div className="checkout">
                        <div className="first-image">
                            <img src={this.state.image} alt="Smiley face"/>
                        </div>
                        <div className="second-image">
                            <img src={this.state.image} alt="Smiley face"/>
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

    showCharacters=()=>{
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
                        <span onClick={this.showRentar}>Characters</span>
                        <span>Episodes</span>
                        <div className="profile">
                            <img src={Profile} alt="Smiley face" />
                            <span className="username">pauchag</span>
                        </div>
                    </div>

                    <div className="rent-container">

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

                        <div className="characters-container">
                        {
                            self.renderCharacters()
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
                    this.showCharacters()
                }
                {
                    this.displayOrder()
                }
            </div>
        )
    }
}

export default Characters