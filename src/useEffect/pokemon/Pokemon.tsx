import { usePokemon } from './hooks/usePokemon';
import PokemonDetails from './components/PokemonDetails';
import PokemonPagination from './components/PokemonPagination';
import './styles/pokemon.style.css';

export default function Pokemon() {
	const { pokemon, loading, error, handleNext, handlePrevious } = usePokemon();

	if (loading) return <h1>Loading....</h1>;
	if (error) return <h1>{error}</h1>;

	return (
		<section className='container'>
			{pokemon ? <PokemonDetails pokemon={pokemon} /> : 'Data not found'}
			<PokemonPagination
				handleNext={handleNext}
				handlePrevious={handlePrevious}
			/>
		</section>
	);
}
