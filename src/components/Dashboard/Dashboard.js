import React from 'react'
import PokemonLogo from '../../../src/assets/pokemoLogo.png'
import PokemonCard from '../PokemonCard/PokemonCard';
import SearchBar from '../SearchBar/SearchBar';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';



export default function Dashboard() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {axios.get(`https://pokeapi.co/api/v2/pokemon`)
  .then(res => {
    const data = res.data.results;
    if(data != undefined){
      setPokemon(data)
    } 
  })}, [])

  useEffect(() => {
    var pokemonesFiltrados = pokemon.filter((pokemonInd) => pokemonInd.name == pokemonName)
    if(pokemonesFiltrados.length != 0){
      setPokemon(pokemonesFiltrados)
    }else{
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
    .then(res => {
      const data = res.data.results;
      if(data != undefined){
        setPokemon(data)
      } 
    })
    }
  }, [pokemonName])
  
  return (
    <div className='container'>
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">The Real Pokémon Search</h1>
          <motion.img src={PokemonLogo} initial={{scale:6}} animate={{scale:1}}></motion.img>
          <p className="lead text-muted">Welcome to Pokémon Search, we will offer you a fast and detailed search of your favorite Pokémon.</p>
          <p>
            <a href="#" className="btn btn-primary my-2 m-1">About Us</a>
            <a href="#" className="btn btn-secondary my-2 m-1">Typings</a>
          </p>
        </div>
      </section>
        <SearchBar pokemonName={pokemonName} onNameChange={setPokemonName}></SearchBar>
        <div className='row w-100 d-flex justify-content-center'>
            {pokemon.map((pkm) => <PokemonCard pkm={pkm}></PokemonCard>)}
        </div>
      </div>
  )
}
