import { Link } from 'react-router';
import { useAuthContext } from './hooks/useAuthContext';
import './styles/navBar.style.css';
export default function NavBar() {
	const { isLoggedIn, logout } = useAuthContext();

	return (
		<ul className='nav-bar'>
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
