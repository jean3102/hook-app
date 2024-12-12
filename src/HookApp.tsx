import { ComponentList } from './Components/ComponentList';
import listHooks from './hooks.json';

export default function HookApp() {
	return (
		<>
			<h1>Hooks List</h1>
			<ComponentList listExample={listHooks} />
		</>
	);
}
