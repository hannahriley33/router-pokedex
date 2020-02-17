import React, { Component } from 'react'
import request from 'superagent'
import ImageItem from './ImageItem.js'
import Home from './Home.js'
import App from './App.js'


export default class Detail extends Component {
    state = { pokemonCharacter: {} }
    
    async componentDidMount() {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokeName}`)

        if (data.body.results) {
            this.setState({ pokemonCharacter: data.body.results[0] })
        }
    }
    render() {
        const { pokemonCharacter } = this.state;
        
        return (
            <div>
                 {pokemonCharacter ?  <ImageItem pokemonData={pokemonCharacter} /> : <h2>No such Pokemon</h2>}
            </div>
        )
    }
}
