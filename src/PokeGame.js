import React, { Component } from 'react';
import Pokedex from './Pokedex'

class PokeGame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'Fire', base_experience: 62 },
      { id: 1, name: 'Bulbasaur', type: 'Seed', base_experience: 64 },
      { id: 95, name: 'Onix', type: ' Rock', base_experience: 77 },
      { id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95 },
      { id: 54, name: 'Psyduck', type: 'Water', base_experience: 64 },
      { id: 143, name: 'Snorlax', type: 'Normal', base_experience: 189 }
    ]
  };
  render() {
    let hand1 = []
    let hand2 = [ ...this.props.pokemon ];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default PokeGame;