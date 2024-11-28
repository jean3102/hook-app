import { useEffect, useState } from 'react';
import { PokemonModel } from '../models/pokemon.model';
// import pokemonJson from '../pokemon.json' with {type: 'json'}
import useFetch from './useFetch';
import usePokemonCounter from './usePokemonPagination';
export const usePokemon = () => {
	const [pokemon, setPokemon] = useState<PokemonModel>();
	const { count, handlePrevious, handleNext } = usePokemonCounter();

	const { response, loading, error } = useFetch<PokemonModel>(
		`https://pokeapi.co/api/v2/pokemon/${count}`
	);

	useEffect(() => {
		if (response) {
			setPokemon(response);
		}
	}, [response]);

	return { pokemon, loading, error, handlePrevious, handleNext };
};
