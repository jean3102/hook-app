import React, { useEffect, useRef, useState } from 'react';
import './styles/taskForm.styles.css';

interface TaskFormProps {
	handleAddTask: (text: string) => void;
}
export default function TaskForm({ handleAddTask }: TaskFormProps) {
	const [task, setTask] = useState('');
	const taskRef = useRef<HTMLInputElement>(null);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setTask(value.trim());
	};

	const handleSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (task !== '') {
			handleAddTask(task);
			setTask('');
		} else {
			taskRef.current?.focus();
		}
	};
	useEffect(() => {
		taskRef.current?.focus();
	}, []);

	return (
		<form
			onSubmit={handleSubmit}
			className="taskForm">
			<input
				ref={taskRef}
				type="text"
				value={task}
				placeholder="What do you need to do?"
				onChange={handleChange}
			/>
			<button type="submit">Add</button>
			<button>Clear</button>
		</form>
	);
}
