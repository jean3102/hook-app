import PokemonCounter from './PokemonCounter';
import PokemonDetail from './PokemonDetails';
import usePokemonList from './usePokemonList';

export default function Pokemon() {
	const { pokemonDetail, loading, error } = usePokemonList();
	console.log(`🚀 ------------ pokemonList:`, pokemonDetail);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<>
			{pokemonDetail ? (
				<PokemonDetail pokemonDetails={pokemonDetail} />
			) : (
				'Data not found'
			)}
			<PokemonCounter />
		</>
	);
}
