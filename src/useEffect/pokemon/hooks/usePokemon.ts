import { useEffect, useState } from 'react';
import { PokemonModel } from '../models/pokemon.model';
// import pokemonJson from '../pokemon.json' with {type: 'json'}
import useFetch from './useFetch';
export const usePokemon = () => {
	const [pokemon, setPokemon] = useState<PokemonModel>();
	const [count, setCount] = useState(1);

	const { response, loading, error } = useFetch<PokemonModel>(
		`https://pokeapi.co/api/v2/pokemon/${count}`
	);

	const handleNext = () => {
		setCount(count + 1);
	};

	const handlePrevious = () => {
		if (count === 1) return;
		setCount(count - 1);
	};

	useEffect(() => {
		if (response) {
			setPokemon(response);
		}
	}, [response]);
	return { pokemon, loading, error, handlePrevious, handleNext };
};
