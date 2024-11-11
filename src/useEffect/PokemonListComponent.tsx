import usePokemonList from './usePokemonList';

export default function PokemonListComponent() {
	const { pokemonList, loading, error } = usePokemonList();

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<ul>
			{pokemonList?.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	);
}
