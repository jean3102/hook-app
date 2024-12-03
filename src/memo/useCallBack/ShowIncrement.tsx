import { memo } from 'react';

interface ShowIncrementProps {
	increment: (value: number) => void;
}
export const ShowIncrement = memo(({ increment }: ShowIncrementProps) => {
	console.log('avoid re-rendering');
	return (
		<>
			<button onClick={() => increment(5)}>Increment</button>
		</>
	);
});
