import './styles/taskFilter.style.css';
interface TaskFilterProps {
	setFilter: (filter: string) => void;
}

export default function TaskFilter({ setFilter }: TaskFilterProps) {
	const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value);
	};
	return (
		<ul className="taskFilter">
			<li>
				<input
					type="radio"
					id="all"
					name="filter"
					value="all"
					onChange={handleFilter}
					defaultChecked
				/>
				<label htmlFor="all">All</label>
			</li>
			<li>
				<input
					type="radio"
					id="completed"
					name="filter"
					value="completed"
					onChange={handleFilter}
				/>
				<label htmlFor="completed">Completed</label>
			</li>
			<li>
				<input
					type="radio"
					id="pending"
					name="filter"
					value="pending"
					onChange={handleFilter}
				/>
				<label htmlFor="pending">Pending</label>
			</li>
		</ul>
	);
}
