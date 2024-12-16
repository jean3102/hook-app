import { ListModel } from './models/task.model';
import './styles/list.styles.css';
export default function List({ list, completeTask }: ListModel) {
	console.log(`🚀 ------------ list:`, list);
	const sortedList = [...list].sort((a, b) => b.id - a.id);
	return (
		<section className="taskList">
			<ul>
				{sortedList.map(({ id, description, completed }) => (
					<li key={id}>
						<input
							type="checkbox"
							checked={completed}
							onChange={() => completeTask(id)}
						/>
						{completed ? <u>{description}</u> : <p>{description}</p>}
						<button>Delete</button>
					</li>
				))}
			</ul>
		</section>
	);
}
