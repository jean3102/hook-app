import { useAuthContext } from './hooks/useAuthContext';

export default function Login() {
	const { login } = useAuthContext();
	return (
			<button onClick={login}>Login </button>
	);
}
