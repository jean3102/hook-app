import { Pokemon } from '../models/pokemon.model';

export const pokemonAdapter = (data: Pokemon) => {
	return {
		id: data.id,
		name: data.name,
		sprites: {
			front_shiny: data.sprites.front_shiny,
			front_default: data.sprites.front_default,
			back_default: data.sprites.back_default,
			back_shiny: data.sprites.back_shiny,
		},
	};
};
