import { memo } from 'react';
import { PokemonDetailsProps } from '../models/pokemon.model';
import '../styles/pokemonDetails.style.css';
export const PokemonDetails = memo(({ pokemon }: PokemonDetailsProps) => {
	const { id, name, sprites } = pokemon;

	return (
		<section className="detail">
			<h2>
				{id} - {name}
			</h2>
			<ul>
				<li>
					<img
						src={sprites.front_default}
						alt={sprites.front_default}
					/>
				</li>
				<li>
					<img
						src={sprites.back_default}
						alt={sprites.back_default}
					/>
				</li>
				<li>
					<img
						src={sprites.front_shiny}
						alt={sprites.front_shiny}
					/>
				</li>
				<li>
					<img
						src={sprites.back_shiny}
						alt={sprites.back_shiny}
					/>
				</li>
			</ul>
		</section>
	);
});
