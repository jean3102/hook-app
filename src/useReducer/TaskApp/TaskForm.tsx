import './styles/taskForm.styles.css';
export default function TaskForm() {
	return (
		<form className='taskForm'>
			<input
				type="text"
				placeholder="What do you need to do?"
			/>
			<button>Add</button>
			<button>Clear Complete</button>
		</form>
	);
}
