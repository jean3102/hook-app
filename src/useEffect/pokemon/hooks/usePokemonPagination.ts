import { useCallback, useState } from 'react';

export default function usePokemonPagination() {
	const [count, setCount] = useState(1);

	const handleNext = useCallback(() => {
		setCount((prev) => prev + 1);
	}, []);

	const handlePrevious = useCallback(() => {
		setCount((prev) => (prev > 1 ? prev - 1 : prev));
	}, []);

	return {
		count,
		handlePrevious,
		handleNext,
	};
}
