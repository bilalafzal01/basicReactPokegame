import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>
        }
        return (
            <div className="Pokedex">
                <h4>{title}</h4>
                <h5 className="Pokedex-exp">Total experience: {this.props.exp}</h5>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;