import { PokemonDetailsProps } from './models/pokemon.model';
import './styles/pokemon-details.styles.css'
export default function PokemonDetails({
	pokemonDetails,
}: PokemonDetailsProps) {
	const { id,name, sprites } = pokemonDetails;
	return (
		<section className='details'>
			<h2>#{id} - {name}</h2>
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
