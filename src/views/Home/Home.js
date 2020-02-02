import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './Home.css';
import Logo from '../../logo.png'
import Profile from '../../profile.png'
import { Link } from "react-router-dom"


export class Home extends Component {
    render() {
        return (
            <div className="top-container">
                <div className="black-layer"></div>
                <div className="navbar">
                    <img src={Logo} alt="Smiley face" />
                    <Link to="/">
                    <span>About us</span>
                    </Link>
                    <Link to="/Characters">
                        <span>Characters</span>
                    </Link>
                    <span>Episodes</span>
                    <div className="profile">
                        <img src={Profile} alt="Smiley face" />
                        <span className="username">pauchag</span>
                    </div>
                </div>
                <div className="header-container">

                    <div className="jumbo-container">
                        <p>Discover the new episode</p>
                        <button>Start</button>
                    </div>

                </div>

                <footer className="footer-distributed">
                    <div className="footer-left">

                        <p className="footer-links">
                            <a >Privacidad</a>

                            <a >Término de Uso</a>

                            <a >Contact</a>


                            <a href="mailto:gabriel@discussthegame.com?Subject=Contact" target="_top">Contacto</a>
                        </p>

                        <p className="copy">FLECHÉ &copy; 2019</p>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Home