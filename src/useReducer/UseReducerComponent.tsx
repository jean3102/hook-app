import { ComponentList } from '../Components/ComponentList';

import listExample from './example.json';
export default function UseReducerComponent() {
	return (
		<>
			<h1>Example with memorize</h1>
			<ComponentList listExample={listExample} />
		</>
	);
}
