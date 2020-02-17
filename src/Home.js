import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import './App.css';
import { Link } from 'react-router-dom'
import request from 'superagent';


export default class App extends Component {

  state = {
  pokemon: [],
  searchBox: '',
}
async componentDidMount() {
  //make api call and set state with result
  const loadPokemon = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)

        this.setState({ pokemon: loadPokemon.body.results })
}

    handleSearch = async (e) => {
        e.preventDefault();

        const pokeData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchBox}`)

        this.setState({ pokemon: pokeData.body.results })
    }


  render() {
    console.log(this.state.searchBox)
    
    return (
      <>
        <div>
            <header>
                <form onSubmit={this.handleSearch}> 
                    <input onChange={(e) => this.setState({searchBox: e.target.value })}/>
                    <button>Search</button>
                </form>
            </header>
            <>
                {
                this.state.pokemon.map(character => 
                
                <Link to={`pokemon/${character.pokemon}`}>
                    <ImageItem pokemonData={character}/>
                    
                </Link>)
                }
             
            </>
        </div>
 </>
  );
}}