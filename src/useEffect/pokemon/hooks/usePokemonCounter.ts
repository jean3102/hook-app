import { useState } from 'react';

export default function usePokemonCounter() {
	const [count, setCount] = useState(1);

	const previousCounter = () => {
		if (count === 1) return;
		setCount((prev) => prev - 1);
	};
	const nextCounter = () => {
		setCount((prev) => prev + 1);
	};
	return {
		count,
		previousCounter,
		nextCounter,
	};
}
