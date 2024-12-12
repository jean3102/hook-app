import { useReducer } from 'react';

interface CounterState {
	count: number;
	error?: string;
}

interface CounterAction {
	type: string;
	payload?: number;
}

export default function CounterReducer() {
	const countReducer = (
		state: CounterState,
		action: CounterAction
	): CounterState => {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1 };
			case 'decrement':
				if (state.count <= 0) return { count: state.count };
				return { count: state.count - 1 };
			case 'reset':
				return { count: 0 };

			default:
				return {
					count: state.count,
					error: `Unhandled action type: ${action.type}`,
				};
		}
	};
	const [state, dispatch] = useReducer(countReducer, { count: 0 });
	return (
		<>
			<h1>Counter {state.count}</h1>
			<code>{state.error}</code>
			<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
			<button onClick={() => dispatch({ type: 'unhandledAction' })}>
				unhandled Action
			</button>
		</>
	);
}
