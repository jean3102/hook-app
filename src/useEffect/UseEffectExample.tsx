import { ComponentList } from '../Components/ComponentList';
import listExample from './examples.json';
export default function UseEffectExample() {
	return (
		<>
			<h1>Example with useEffect</h1>
			<ComponentList listExample={listExample} />
		</>
	);
}
