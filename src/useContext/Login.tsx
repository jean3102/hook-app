import { useState } from 'react';
import { useAuthContext } from './hooks/useAuthContext';

export default function Login() {
	const { login } = useAuthContext();
	const [form, setForm] = useState({
		fullName: 'John Doe',
		email: 'example@gmail.com',
		password: '123456',
	});

	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		setError('');
	};

	const handleValidation = () => {
		if (!form.email || !form.password || !form.fullName) {
			return false;
		}
		return true;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!handleValidation()) {
			setError('Email, password and full name are required');
			return;
		}
		login(form);
	};
	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="full Name"
					name="fullName"
					placeholder="name"
					value={form.fullName}
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={form.password}
					onChange={handleChange}
					autoComplete="on"
				/>
				<button type="submit">Sign In</button>
				{error && <p>{error}</p>}
			</form>
		</>
	);
}
