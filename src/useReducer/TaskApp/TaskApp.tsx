import List from './List';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import useTaskReducer from './hooks/useTaskReducer';

export default function TaskApp() {
	const { addTask, deleteTask, completeTask, taskList, error, setFilter } = useTaskReducer();

	const handleAddTask = (text: string) => {
		addTask(text);
	};

	return (
		<>
			<h1>Task App</h1>
			<TaskForm handleAddTask={handleAddTask} />
			{error && <span>{error}</span>}
			<TaskFilter setFilter={setFilter} />
			{taskList.length > 0 && (
				<List
					list={taskList}
					completeTask={completeTask}
					deleteTask={deleteTask}
				/>
			)}
		</>
	);
}
