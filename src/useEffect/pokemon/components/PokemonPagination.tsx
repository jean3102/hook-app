import { memo } from 'react';
import { PokemonPaginationModelProps } from '../models/pokemonPagination.model';
import '../styles/pokemonPagination.style.css';
export const PokemonPagination = memo(
	({ handleNext, handlePrevious }: PokemonPaginationModelProps) => {
		return (
			<section className="pagination">
				<button onClick={handlePrevious}>Previous</button>
				<button onClick={handleNext}>Next</button>
			</section>
		);
	}
);
