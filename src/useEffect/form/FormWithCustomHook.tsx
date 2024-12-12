import useHandleForm from './useHandleForm';
interface Login {
	email: string;
	password: string;
}
export default function FormWithCustomHook() {
	const { handleChange, formState, resetForm } = useHandleForm({
		email: '',
		password: '',
	});
	const { email, password } = formState as Login;

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(`🚀 ------------ email:`, email);
		console.log(`🚀 ------------ password:`, password);
	};

	return (
		<>
			<h1>Form</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					onChange={handleChange}
					value={email}
				/>
				<input
					type="password"
					name="password"
					onChange={handleChange}
					value={password}
					autoComplete="on"
				/>
				<button type="submit">Sign In</button>
				<button
					type="button"
					onClick={resetForm}>
					Reset
				</button>
			</form>
		</>
	);
}
