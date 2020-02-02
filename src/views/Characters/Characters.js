import React, { Component } from 'react'
//import axios from 'axios';
import Logo from '../../logo.png'
import Profile from "../../profile.png"
import { Card } from "../Characters/card"
import '../Characters/Characters.css';
import { Link } from "react-router-dom";

export class Characters extends Component {
    state = {
        order:false,
        dresses:[],
        picture:""
    } 

/*     componentDidMount(){
        console.log('Hola')
        this.getCharactersByName()
    }
*/

    renderDresses=()=>{
        console.log(this.state.dresses)
        return this.state.dresses.map(dress => {
            return( 
                <div>
                    <button onClick={()=>this.showOrder(dress.picture)}>
                            <Card picture={dress.picture}/>
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
                                Tipo
                            </li>
                            <li>
                                Precio
                            </li>
                            <li>
                                Tamaño
                            </li>
                            <li>
                                Marca
                            </li>
                            <li>
                                Descripción
                            </li>
                        </ul>
                        <button className="button-check">Rentar</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    showDresses=()=>{
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
                                <li>FURNITURE/PIZZA/PHONE WORLDS</li>

                            </ul>

                        </div>

                        <div className="dresses-container">
                        {
                            self.renderDresses()
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
                    this.showDresses()
                }
                {
                    this.displayOrder()
                }
            </div>
        )
    }
}

export default Characters