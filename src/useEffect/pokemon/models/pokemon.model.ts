export interface PokemonDetailsProps {
	pokemon: PokemonModel;
}

export interface PokemonModel {
	id: number;
	name: string;
	sprites: Sprite;
}

interface Sprite {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}
