import useCounter from './useCounter';

export default function CounterComponent() {
	const { counter, addCounter, subtractCounter, resetCounter } = useCounter();
	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={() => subtractCounter(1)}>1-</button>
			<button onClick={resetCounter}>Reset</button>
			<button onClick={() => addCounter(1)}>1+</button>
		</div>
	);
}
