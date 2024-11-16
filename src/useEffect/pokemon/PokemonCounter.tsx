import { PokemonCounterProps } from './models/pokemon.model';
import './styles/pokemon-counter.styles.css';
export default function PokemonCounter({
	previousCounter,
	nextCounter,
}: PokemonCounterProps) {
	return (
		<section className="pagination">
			<button onClick={previousCounter}>Previous</button>
			<button onClick={nextCounter}>Next</button>
		</section>
	);
}
