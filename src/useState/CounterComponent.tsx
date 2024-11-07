import useCounter from './useCounter';

export default function CounterComponent() {
	const { counter, addCounter, subtractCounter, resetCounter } = useCounter();
	return (
		<div>
			<h2>{counter}</h2>
			<button
				className="btn btn-danger"
				onClick={() => subtractCounter(1)}>
				1-
			</button>
			<button
				className="btn btn-secondary"
				onClick={resetCounter}>
				Reset
			</button>
			<button
				className="btn btn-success"
				onClick={() => addCounter(1)}>
				1+
			</button>
		</div>
	);
}
