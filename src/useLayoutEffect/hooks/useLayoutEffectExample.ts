import { useLayoutEffect, useRef, useState } from 'react';

export default function useLayoutEffectExample() {
	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0,
	});

	const [dynamicHeight, setDynamicHeight] = useState(400);
	const [backGround, setBackGround] = useState('purple');
	const boxRef = useRef<HTMLDivElement>(null);

	const updateHeight = (height: number) => {
		setDynamicHeight((prevHeight) => Math.max(0, prevHeight + height));
	};

	useLayoutEffect(() => {
		if (boxRef.current) {
			const { width, height } = boxRef.current.getBoundingClientRect();

			setBoxSize({
				width,
				height,
			});

			setBackGround(height > 500 ? 'red' : 'purple');
		}
	}, [dynamicHeight]);
	return {
		boxSize,
		dynamicHeight,
		boxRef,
		updateHeight,
		backGround,
	};
}
