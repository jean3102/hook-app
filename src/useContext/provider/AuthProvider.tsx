import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { AuthProviderModel, User } from '../models/authContext.model';
import { useNavigate } from 'react-router';

export const AuthProvider = ({ children }: AuthProviderModel) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const navigate = useNavigate();
	const login = () => {
		console.log('login');
		setUser({ id: 1, name: 'John Doe', email: 'jeancarlos3102@gmail.com' });
		setIsLoggedIn(true);
		navigate('/use-context/user-profile');
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUser(null);
		navigate('/use-context/login');
	};
	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
};
