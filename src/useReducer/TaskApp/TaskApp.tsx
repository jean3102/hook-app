import List from './List';
import TaskForm from './TaskForm';

const taskList = [
	{ id: 1, description: 'Learn TypeScript', completed: false },
	{ id: 2, description: 'Write documentation', completed: true },
	{ id: 3, description: 'Review pull requests', completed: false },
];

export default function TaskApp() {
	return (
		<>
			<h1>TodoApp</h1>
			<TaskForm />
			<List list={taskList} />
		</>
	);
}
