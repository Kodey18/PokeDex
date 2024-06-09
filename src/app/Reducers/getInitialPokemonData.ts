import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async() => {
    try{
        // '{data}' by using this we are taking only the data field from the whole object that will be returned from the api call.
        const {data} = await axios.get(pokemonsRoute);
        // console.log("Get initial pokemon reducers : ",data);
        return data.results;
    }catch(err){
        console.log(err);
    }
})