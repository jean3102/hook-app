import { useState } from 'react';

const initialValue = 0;
export default function useCounter() {
	const [counter, setCounter] = useState(initialValue);

	const addCounter = (value = 1) => {
		setCounter(counter + value);
	};

	const subtractCounter = (value = 1) => {
		if (counter < 1) return;
		setCounter(counter - value);
	};

	const resetCounter = () => {
		setCounter(initialValue);
	};

	return { counter, addCounter, subtractCounter, resetCounter };
}
