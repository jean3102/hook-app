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
	const findTask = state.filter((task) =>
		task.id === id ? { ...state, completed: !task.completed } : state
	);
	return findTask;
};
