import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageItem extends Component {
  
    render() {
        console.log(this.props)
        
    return ( 
        <div class="itemCard">
            <img src={this.props.pokemonData.url_image} height="200" width="200" alt=""></img>
            <h3>{this.props.pokemonData.pokemon}</h3>
            <p>{this.props.pokemonData.attack}</p>
            <p>{this.props.pokemonData.defense}</p>

        </div>

        );
    }}
    // ImageItem.propTypes = {
    //    pokemonData: PropTypes.shape({
    //     url_image: PropTypes.string,
    //     pokemon: PropTypes.string,
    //     attack: PropTypes.string,
    //     defense: PropTypes.string,
    //    })
    // }