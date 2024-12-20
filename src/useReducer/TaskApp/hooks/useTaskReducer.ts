import { useReducer, useState } from 'react';
import { Task, TaskAction } from '../models/task.model';
import {
	handleAddTask,
	handleCompleteTask,
	handleDeleteTask,
} from '../helpers/handleTask';

export default function useTaskReducer() {
	const [error, setError] = useState<null | string>(null);
	const [filter, setFilter] = useState('all');
	const handleTaskReducer = (state: Task[], action: TaskAction): Task[] => {
		setError('');
		switch (action.type) {
			case 'create':
				return handleAddTask(state, action.payload.description);
			case 'complete':
				return handleCompleteTask(state, action.payload.id);
			case 'delete':
				return handleDeleteTask(state, action.payload.id);
		}
	};

	const [state, dispatch] = useReducer(handleTaskReducer, []);

	const addTask = (description: string) => {
		const taskExist = state.some(
			(task) =>
				task.description.toLocaleLowerCase() === description.toLocaleLowerCase()
		);
		if (taskExist) return setError(`Task ${description} already exist`);
		dispatch({ type: 'create', payload: { description: description } });
	};

	const completeTask = (id: number) => {
		dispatch({ type: 'complete', payload: { id: id } });
	};

	const deleteTask = (id: number) => {
		dispatch({ type: 'delete', payload: { id: id } });
	};

	const filteredTasks = () => {
		if (filter === 'completed') return state.filter((task) => task.completed);
		if (filter === 'pending') return state.filter((task) => !task.completed);

		return state;
	};

	return {
		taskList: filteredTasks(),
		addTask,
		deleteTask,
		completeTask,
		error,
		setFilter,
	};
}
