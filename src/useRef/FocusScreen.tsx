import { useRef } from 'react';

export default function FocusScreen() {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const setFocus = () => {
		if (firstNameRef.current?.value === '') return firstNameRef.current?.focus();
		if (lastNameRef.current?.value === '') return lastNameRef.current?.focus();
	};
	return (
		<section>
			<input
				type="text"
				name="firstName"
				placeholder="First lame"
				ref={firstNameRef}
			/>
			<input
				type="text"
				name="lastNameRef"
				placeholder="Last name"
				ref={lastNameRef}
			/>
			<button onClick={setFocus}>Set Focus</button>
		</section>
	);
}
