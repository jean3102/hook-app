import { useEffect, useState } from 'react';
import { Pokemon } from './pokemon.model';
import { pokemonAdapter } from './pokemon.adapter';

export default function usePokemonList() {
	const [pokemonDetail, setPokemonDetail] = useState<Pokemon>();
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const callPokemon = async () => {
			try {
				setLoading(true);
				const fetchingData = await fetch(
					'https://pokeapi.co/api/v2/pokemon/1',
					{
						signal,
					}
				);
				if (!fetchingData.ok) throw new Error('Failed to fetch data');

				const result = await fetchingData.json();
				const dataAdapter = pokemonAdapter(result);
				setPokemonDetail(dataAdapter);
			} catch (error) {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError('An unknown error occurred');
				}
			} finally {
				setLoading(false);
			}
		};

		callPokemon();

		return () => {
			controller.abort();
		};
	}, []);
	return { pokemonDetail, error, loading };
}
