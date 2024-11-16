export interface Pokemon {
	id: number;
	name: string;
	sprites: Sprites;
}

export interface PokemonDetailsProps {
	pokemonDetails: Pokemon;
}
export interface PokemonCounterProps {
	previousCounter: () => void;
	nextCounter: () => void;
}

interface Sprites {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}
