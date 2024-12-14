import { useReducer } from 'react';
import List from './List';
import TaskForm from './TaskForm';
import { Task } from './models/task.model';

const taskList = [
	{ id: 1, description: 'Learn TypeScript', completed: false },
	{ id: 2, description: 'Write documentation', completed: true },
	{ id: 3, description: 'Review pull requests', completed: false },
];

type TaskAction =
	| { type: 'create'; payload: { description: string } }
	| { type: 'complete'; payload: { id: number } }
	| { type: 'delete'; payload: { id: number } };

export default function TaskApp() {
	const handleTaskReducer = (state: Task[], action: TaskAction): Task[] => {
		switch (action.type) {
			case 'create':
				return [
					...state,
					{
						id: taskList.length,
						description: action.payload.description,
						completed: false,
					},
				];
			case 'complete':
				return [];
			case 'delete':
				return [];
		}
	};
	const [state, dispatch] = useReducer(handleTaskReducer, []);
	console.log(`🚀 ------------ dispatch:`, dispatch);
	console.log(`🚀 ------------ state:`, state);
	return (
		<>
			<button
				onClick={() =>
					dispatch({
						type: 'create',
						payload: {
							description: 'jean',
						},
					})
				}>Create</button>
			<h1>TodoApp</h1>
			<TaskForm />
			<List list={taskList} />
		</>
	);
}
