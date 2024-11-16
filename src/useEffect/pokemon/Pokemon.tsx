import PokemonCounter from './PokemonCounter';
import PokemonDetail from './PokemonDetails';
import usePokemonDetails from './hooks/usePokemonDetails';
import usePokemonCounter from './hooks/usePokemonCounter';
import './styles/pokemon.styles.css';

export default function Pokemon() {
	const { count, nextCounter, previousCounter } = usePokemonCounter();
	const { pokemonDetail, loading, error } = usePokemonDetails(count);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<section className="container">
			{pokemonDetail ? (
				<PokemonDetail pokemonDetails={pokemonDetail} />
			) : (
				'Data not found'
			)}
			<PokemonCounter
				previousCounter={previousCounter}
				nextCounter={nextCounter}
			/>
		</section>
	);
}
