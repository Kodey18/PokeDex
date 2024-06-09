export interface AppTypeInitialState{}

export interface PokemonTypeInitialState {
    allPokemon: undefined | genericPokemonType[];
    randomPokemon : undefined | generatedPokemonData[];
}

export interface genericPokemonType {
    name: string,
    url: string,
}   

export interface generatedPokemonData {
    name: string,
    image: string,
    id: number,
    types : pokemonTypeInterface[],
}

export interface pokemonTypeInterface {
    [key: string]: {
        image: string;
        resistance: string[];
        strength: string[];
        weakness: string[];
        vulnerable: string[];
    };
}

// this is interface for the datatype of pokemon data user will store in his/her my list.
export interface userPokemonsType extends generatedPokemonData {
    firebaseId? :string
}