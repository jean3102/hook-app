import { useMemo, useState } from 'react';

const heavyStuff = (iterationNumber = 100) => {
	for (let index = 0; index < iterationNumber; index++) {
		console.log('here with go...');
	}

	return `${iterationNumber} iterations performed`;
};

export default function UseMemoExample() {
	const [count, setCount] = useState(1000);
	const [showMessage, setShowMessage] = useState(true);
	
	//?avoid re-rendering if counter doesn't change
	const memorizeValue = useMemo(() => heavyStuff(count), [count]);

	return (
		<section>
			<h1>Counter: {count}</h1>
			<h2>{memorizeValue}</h2>
			{showMessage && (
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
					placeat animi, inventore vitae at nihil iusto unde mollitia sit totam
					delectus cupiditate repellendus eaque consequuntur, iure illo iste,
					ipsa voluptas.
				</p>
			)}
			<button onClick={() => setCount((prev) => prev + 1)}>+1</button>
			<button onClick={() => setShowMessage(!showMessage)}>
				Show/Hide Counter {JSON.stringify(showMessage)}
			</button>
		</section>
	);
}
