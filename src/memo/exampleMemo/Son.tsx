import { memo } from 'react';

interface SonProps {
	number: number;
	increment: (value: number) => void;
}
export const Son = memo(({ number, increment }: SonProps) => {
	console.log('generated again:(');

	return <button onClick={() => increment(number)}>{number}</button>;
});
