import React, { Component } from 'react';
import Pokedex from './Pokedex';
class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 65 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
            { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
        ]
    };
    render() {
        let hand1 = [];
        let hand2 = [...this.props.pokemon];
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon)=> exp + pokemon.exp,
        0);
        let exp2 = hand2.reduce((exp, pokemon)=> exp + pokemon.exp,
        0);
        
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1>exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2>exp1} />
            </div>
        );
    }
}

export default Pokegame;