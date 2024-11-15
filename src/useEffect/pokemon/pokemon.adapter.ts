import { Pokemon } from './pokemon.model';

export const pokemonAdapter = (data: Pokemon) => {
	return {
		name: data.name,
		sprites: {
			front_shiny: data.sprites.front_shiny,
			front_default: data.sprites.front_default,
			back_default: data.sprites.back_default,
			back_shiny: data.sprites.back_shiny,
		},
	};
};
