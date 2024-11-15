import { useEffect, useState } from 'react';

export default function Cleanup() {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [input, setInput] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setInput(value);
	};

	useEffect(() => {
		const onMouseMove = ({ x, y }: MouseEvent) => {
			setCoords({ x, y });
		};

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, [input]);
	return (
		<>
			<input
				type="text"
				onChange={handleChange}
				value={input}
			/>

			{JSON.stringify(coords)}
		</>
	);
}
