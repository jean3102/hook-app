import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export default function CallBackHook() {
	const [counter, setCounter] = useState(0);

	const increment = useCallback((value: number) => {
		setCounter((prevCount) => prevCount + value);
	}, []);

	return (
		<>
			<h1>useCallBack Hook: {counter}</h1>
			<ShowIncrement increment={increment} />
		</>
	);
}
