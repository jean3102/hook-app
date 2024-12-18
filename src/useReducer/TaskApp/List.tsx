import { ListModel } from './models/task.model';
import './styles/list.styles.css';
export default function List({ list, deleteTask, completeTask }: ListModel) {
	const sortedList = [...list].sort((a, b) => b.id - a.id);

	return (
		<section className="taskList">
			<ul>
				{sortedList.map(({ id, description, date, completed }) => (
					<li key={id}>
						<input
							type="checkbox"
							checked={completed}
							onChange={() => completeTask(id)}
						/>
						{completed ? (
							<u>{description}</u>
						) : (
							<p>
								{description} <span>{date}</span>
							</p>
						)}
						<button onClick={() => deleteTask(id)}>Delete</button>
					</li>
				))}
			</ul>
		</section>
	);
}
