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
							<u>
								<span>{description}</span> <span>{date}</span>
							</u>
						) : (
							<p>
								<span>{description}</span> <span>{date}</span>
							</p>
						)}

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 24 24"
							onClick={() => deleteTask(id)}>
							<path
								fill="currentColor"
								d="M20.705 5.27h-4.7v-.89a2.4 2.4 0 0 0-.69-1.68a2.38 2.38 0 0 0-1.69-.7h-3.26a2.44 2.44 0 0 0-1.69.7a2.4 2.4 0 0 0-.69 1.68v.89h-4.69a.75.75 0 0 0 0 1.5h1.42v11.76A3.47 3.47 0 0 0 8.185 22h7.62a3.47 3.47 0 0 0 3.47-3.47V6.77h1.43a.75.75 0 0 0 0-1.5m-6.2 0h-5v-.89a.9.9 0 0 1 .25-.62a.94.94 0 0 1 .63-.26h3.26a.88.88 0 0 1 .63.26a.89.89 0 0 1 .25.62z"
							/>
						</svg>
					</li>
				))}
			</ul>
		</section>
	);
}
