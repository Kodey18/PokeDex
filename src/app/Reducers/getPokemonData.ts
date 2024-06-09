import { createAsyncThunk } from "@reduxjs/toolkit";
import { generatedPokemonData, genericPokemonType } from "../../utils/Types";
import axios from "axios";
import { error } from "console";
import { defaultImages, images } from "../../utils/getPokemonImages";
import { pokemonTypes } from "../../utils/PokemonTypes";

export const getPokemonData = createAsyncThunk("pokemon/randomPokemon", async(pokemons : genericPokemonType[]) => {
    try{
        const PokemonsData : generatedPokemonData[] = [];
        for await (const pokemon of pokemons){
            const {data} : {
                data: {
                    id: number
                    types: {type : generatedPokemonData}[]
                }
            } = await axios.get(pokemon.url);

            const types = data.types.map(
                ( {type : { name } } : { type : { name : string }} ) => ({
                    //@ts-expect-error
                    [name]: pokemonTypes[name]
                })
            );

            //@ts-expect-error
            let image: string = images[data.id];
            if(!image){
                //@ts-expect-error
                image = defaultImages[data.id];
            }

            if(image){
                PokemonsData.push({
                    name: pokemon.name,
                    id: data.id,
                    image,
                    types,
                });
            }
        }

        console.log(PokemonsData);
        return PokemonsData;
    }catch(err){
        console.log(err);
    }
});