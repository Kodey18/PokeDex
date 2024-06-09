import { userPokemonsType } from "../utils/Types";

const PokemonCardGrid = ( {gridPokemons} : {gridPokemons : userPokemonsType[]} ) => {
    return (
        <div className="pokemon-card-grid-container">
            <div className="pokemon-card-grid">
                {
                    gridPokemons && gridPokemons.length > 0 &&
                    gridPokemons?.map((data : any) => {
                        return (
                            <div key={data.id} className="pokemon-card">
                                <div className="upper-section">
                                    <div className="features">
                                        <div className="compare-feature"></div>
                                        <div className="list-feature"></div>
                                    </div>
                                    <div className="Pokemon-title">
                                        {data.name}
                                    </div>
                                </div>
                                <div className="middle-section">
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="lower-section"></div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PokemonCardGrid;