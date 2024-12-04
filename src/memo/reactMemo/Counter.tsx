import { memo } from 'react';

interface CounterProps {
	counter: number;
}

export const Counter = memo(({ counter }: CounterProps) => {
	console.log(`🚀avoid re-rendering if property does not change:`);
	return <small>{counter}</small>;
});
