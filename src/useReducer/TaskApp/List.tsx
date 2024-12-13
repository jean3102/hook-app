import { ListModel } from './models/task.model';
import './styles/list.styles.css';
export default function List({ list }: ListModel) {
	return (
		<ul className="taskList">
			{list.map(({ id, description, completed }) => (
				<li key={id}>
					<input
						type="checkbox"
						checked={completed}
					/>
					{completed ? <u>description</u> : <p>{description}</p>}
					<button>Delete</button>
				</li>
			))}
		</ul>
	);
}
