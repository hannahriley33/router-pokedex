import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        
        return (
            <div>
                <p><img src={ this.props.pokemon.image } alt="" /></p>
                <p>name: { this.props.pokemon.name }</p>
                <p>attack: { this.props.pokemon.attack }</p>
                <p>defense { this.props.pokemon.defense }</p>
            </div>
        )
    }
}
