interface Pokemon {
    name: string;
    url: string;
}

class PokemonArrayImpl {
    pokemonArray: Pokemon[];
    constructor(){
        this.pokemonArray = []
    }
}

export const PokemonArray = new PokemonArrayImpl();