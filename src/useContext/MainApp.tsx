import { useAuthContext } from './hooks/useAuthContext';
import NavBar from './NavBar';

export default function MainApp() {
	const { user } = useAuthContext();
	console.log(`🚀 ------------ user:`, user);
	return (
		<>
			<NavBar />
			MainApp
		</>
	);
}
