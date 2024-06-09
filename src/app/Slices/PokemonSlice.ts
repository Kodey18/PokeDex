import { createSlice } from '@reduxjs/toolkit'
import {PokemonTypeInitialState} from '../../utils/Types'
import { getInitialPokemonData } from '../Reducers/getInitialPokemonData';
import { getPokemonData } from '../Reducers/getPokemonData';

const initialState : PokemonTypeInitialState = {
    allPokemon: undefined,
    randomPokemon: undefined,
}

export const PokemonSlice = createSlice({
    name: "Pokemon",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
            state.allPokemon = action.payload;
        });
        
        builder.addCase(getPokemonData.fulfilled, (state, action) => {
            state.randomPokemon = action.payload;
        });
    }
});

export const {} = PokemonSlice.actions;