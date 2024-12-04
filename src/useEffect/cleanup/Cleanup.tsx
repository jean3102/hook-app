import { useEffect, useState } from 'react';

export default function Cleanup() {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		if (!isRunning) return; // Skip setting up the timer if not running

		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + 1);
		}, 1000);

		// Cleanup function
		return () => {
			clearInterval(interval); // Clear timer
			console.log('Timer cleaned up!');
		};
	}, [isRunning]);

	const handleStop = () => setIsRunning(false);
	const handleStart = () => setIsRunning(true);

	return (
		<div>
			<h1>Count: {count}</h1>
			<div>
				<button
					onClick={handleStop}
					disabled={!isRunning}>
					Stop Timer
				</button>
				<button
					onClick={handleStart}
					disabled={isRunning}>
					Start Timer
				</button>
			</div>
		</div>
	);
}
