import { useEffect } from 'react';
import { useAuthContext } from './hooks/useAuthContext';
import NavBar from './NavBar';
import { useNavigate } from 'react-router';

export default function UserProfile() {
	const navigate = useNavigate();
	const { user, isLoggedIn } = useAuthContext();

	useEffect(() => {
		if (!isLoggedIn) navigate('/use-context/login');
	}, [isLoggedIn, navigate]);
	
	return (
		<>
			<NavBar />
			{JSON.stringify(user)}
		</>
	);
}
