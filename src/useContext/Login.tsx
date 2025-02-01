import { useState } from 'react';
import { useAuthContext } from './hooks/useAuthContext';

export default function Login() {
	const { login } = useAuthContext();
	const [form, setForm] = useState({
		email: 'example@gmail.com',
		password: '123456',
	});

	const [error, setError] = useState('');
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleValidation = () => {
		if (!form.email || !form.password) {
			return false;
		}
		return true;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!handleValidation()) {
			setError('Email and password are required');
			return;
		}
		login(form.email, form.password);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Email"
				onChange={handleChange}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={handleChange}
			/>
			<button type="submit">Sign In</button>
			{error && <p>{error}</p>}
		</form>
	);
}
