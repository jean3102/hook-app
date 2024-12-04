import { ComponentList } from './Components/ComponentList';
import listHooks from './hooks.json';

export default function HookApp() {
	return (
		<>
			<ComponentList listExample={listHooks} />
		</>
	);
}
