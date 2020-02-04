import React, { Component } from 'react'
import '../Characters/card.css'

export default class Card extends React.Component {
    state = {
        loading: true,
        person: null
      };

async componentDidMount() {
    const url = "https://rickandmortyapi.com/api/character/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
}

render() {
    return (
        <div>
            {this.state.loading || !this.state.person ? (
                <div>loading...</div>
            ) : (
                    <div>
                        <div>{this.state.person.characters.name}</div>
                        <div>{this.state.person.characters.location}</div>
                        <img src={this.state.person.image} />
                    </div>
                )}
        </div>
    );
}
}

/* export class Card extends Component {
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

export default Card */
