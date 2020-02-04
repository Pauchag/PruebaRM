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
                    <Link to="/Episodes">
                        <span>Episodes</span>
                    </Link>
                    <div className="profile">
                        <img src={Profile} alt="Smiley face" />
                        <span className="username">pauchag</span>
                        <div class="search-bar">
                            <span className="bar">Search bar</span>
                        </div>
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
                            <a >Privacy</a>

                            <a >Terms of use</a>

                            <a >More about us</a>


                            <a href="mailto:paulinachabrand@gmail.com?Subject=Contact" target="_top">Contact</a>
                        </p>

                        <p className="copy">Test Rick and Morty &copy; 2020</p>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Home