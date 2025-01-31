import { Link } from 'react-router';
import { useAuthContext } from './hooks/useAuthContext';

export default function NavBar() {
	const { isLoggedIn, user, logout } = useAuthContext();
	console.log(`🚀 ------------ user:`, user);
	console.log(`🚀 ------------ isLoggedIn:`, isLoggedIn);

	return (
		<ul>
			{!isLoggedIn ? (
				<li>
					<Link to="login">login</Link>
				</li>
			) : (
				<li>
					<button onClick={logout}>Log Out</button>
				</li>
			)}
		</ul>
	);
}
