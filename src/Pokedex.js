import React, { Component } from 'react';
import PokeCard from './PokeCard'
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    let title;
    if(this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand!</h1>;
    }
    return (
      <div className="Pokedex">
        <h1>Pokédex Game! (v1)</h1>
        <h4>Total Experience: {this.props.exp}</h4>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <PokeCard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;