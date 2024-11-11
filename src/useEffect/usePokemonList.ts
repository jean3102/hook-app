import { useEffect, useState } from 'react';

interface Pokemon {
	name: string;
	url: string;
}
interface PokeApiResponse {
	results: Pokemon[];
}

export default function usePokemonList() {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>();
	const [error, setError] = useState<null | string>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		const callPokemon = async () => {
			try {
				setLoading(true);
				const fetchingData = await fetch('https://pokeapi.co/api/v2/pokemon', {
					signal,
				});
				if (!fetchingData.ok) throw new Error('Failed to fetch data');

				const res: PokeApiResponse = await fetchingData.json();
				setPokemonList(res.results);
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
	return { pokemonList, error, loading };
}
