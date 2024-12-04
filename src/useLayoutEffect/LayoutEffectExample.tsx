import useLayoutEffectExample from './hooks/useLayoutEffectExample';
import './styles/layoutEffectExample.style.css';
export default function LayoutEffectExample() {
	const { backGround, boxRef, boxSize, dynamicHeight, updateHeight } = useLayoutEffectExample();

	return (
		<section
			className="layoutEffect"
			ref={boxRef}
			style={{ background: `${backGround}`, height: `${dynamicHeight}px` }}>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta
				similique hic vero corporis, commodi quasi ut temporibus assumenda.
				Dignissimos, aliquid tenetur molestias rem mollitia expedita quibusdam
				corrupti ipsum accusamus!
			</p>
			<pre>
				<code>{JSON.stringify(boxSize)}</code>
			</pre>
			<section>
				<button onClick={() => updateHeight(50)}>Increase Height + 50</button>
				<button onClick={() => updateHeight(-50)}>Decrement Height - 50</button>
			</section>
		</section>
	);
}
