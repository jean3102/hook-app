import { PokemonDetailsProps } from './pokemon.model';

export default function PokemonDetails({
	pokemonDetails,
}: PokemonDetailsProps) {
	const { name, sprites } = pokemonDetails;
	return (
		<section>
			<h2>{name}</h2>
			<ul>
				<li>
					<img
						src={sprites.front_default}
						alt={name}
					/>
				</li>
				<li>
					<img
						src={sprites.back_default}
						alt={name}
					/>
				</li>
				<li>
					<img
						src={sprites.front_shiny}
						alt={name}
					/>
				</li>
				<li>
					<img
						src={sprites.back_shiny}
						alt={name}
					/>
				</li>
			</ul>
		</section>
	);
}
