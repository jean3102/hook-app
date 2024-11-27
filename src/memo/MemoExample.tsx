import { useState } from 'react';
import { Counter } from './Counter';

export default function MemoExample() {
	const [count, setCount] = useState(0);
	const [showMessage, setShowMessage] = useState(true);
	return (
		<section>
			<h1>
				Counter: <Counter counter={count} />
			</h1>
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
