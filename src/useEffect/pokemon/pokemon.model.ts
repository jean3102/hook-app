export interface Pokemon {
	name: string;
	sprites: Sprites;
}

export interface PokemonDetailsProps {
	pokemonDetails: Pokemon;
}

interface Sprites {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}
