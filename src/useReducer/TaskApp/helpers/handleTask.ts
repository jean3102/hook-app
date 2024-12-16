import { Task } from '../models/task.model';

export const handleAddTask = (state: Task[], description: string) => {
	return [
		...state,
		{
			id: state.length + 1,
			description: description,
			completed: false,
		},
	];
};

export const handleCompleteTask = (state: Task[], id: number) => {
	const updatedState = state.map((task) =>
		task.id === id ? { ...task, completed: !task.completed } : task
	);
	return updatedState;
};

export const handleDeleteTask = (state: Task[], id: number) => {
	return state.filter((task) => task.id !== id);
};
