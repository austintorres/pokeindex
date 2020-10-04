import React, { Component } from 'react';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;
    return (
      <div className="PokeCard">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default PokeCard;