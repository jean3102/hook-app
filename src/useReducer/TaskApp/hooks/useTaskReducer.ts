import { useReducer, useState } from 'react';
import { Task, TaskAction } from '../models/task.model';
import { handleAddTask, handleCompleteTask } from '../helpers/handleTask';

export default function useTaskReducer() {
	const [error, setError] = useState<null | string>(null);
	const handleTaskReducer = (state: Task[], action: TaskAction): Task[] => {
		setError('');
		switch (action.type) {
			case 'create':
				return handleAddTask(state, action.payload.description);
			case 'complete':
				return handleCompleteTask(state, action.payload.id);
			case 'delete':
				return [];
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

	return { taskList: state, addTask, completeTask, error };
}
