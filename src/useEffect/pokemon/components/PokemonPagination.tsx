import { PokemonPaginationModelProps } from '../models/pokemonPagination.model';
import '../styles/pokemonPagination.style.css'
export default function PokemonPagination({
	handleNext,
	handlePrevious,
}: PokemonPaginationModelProps) {
	return (
		<section className='pagination'>
			<button onClick={handlePrevious}>Previous</button>
			<button onClick={handleNext}>Next</button>
		</section>
	);
}