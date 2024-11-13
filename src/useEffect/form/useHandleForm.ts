import { useState } from 'react';

export default function useHandleForm(initialValue = {}) {
	const [formState, setFormState] = useState(initialValue);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormState({ ...formState, [name]: value });
	};

	const resetForm = () => {
		setFormState(initialValue);
	};

	return { handleChange, formState, resetForm };
}
