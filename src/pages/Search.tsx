import React, { useEffect } from 'react'
import Wrapper from '../sections/Wrapper'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { getInitialPokemonData } from '../app/Reducers/getInitialPokemonData';
import { getPokemonData } from '../app/Reducers/getPokemonData';
import PokemonCardGrid from '../components/PokemonCardGrid';

const Search = () => {
  const dispatch = useAppDispatch();

  const { allPokemon, randomPokemon } = useAppSelector(({pokemon}) => pokemon);

  useEffect(()=>{
    dispatch(getInitialPokemonData());
  }, [dispatch]);

  useEffect(() => {
    if(allPokemon){
      const clonnedPokemon = [...allPokemon];
      const randomPokemonIds = clonnedPokemon.sort(() => Math.random() - Math.random()).slice(0, 20);
      console.log("Random pokemons", randomPokemonIds);
      dispatch(getPokemonData(randomPokemonIds));
    }
  }, [allPokemon, dispatch]);

  
  return (
    <>
      <div className="search">
        <input type="search" />
        <PokemonCardGrid gridPokemons = {randomPokemon || []} />
      </div>
    </>
  )
}

export default Wrapper(Search);