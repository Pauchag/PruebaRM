import React, { Component } from 'react'
import '../Characters/card.css'

export class Card extends Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.image} alt="Smiley face"/>
                <span className="dress-name">Negro</span>
                <span className="price">$47.99</span>
                
            </div>
        )
    }
}

export default Card