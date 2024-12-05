import { useNavigate } from 'react-router';
import './component.style.css';
interface ComponentListProps {
	listExample: {
		path: string;
		description: string;
	}[];
}

export const ComponentList = ({ listExample }: ComponentListProps) => {
	const navigation = useNavigate();
	return (
		<ul className="componentList">
			{listExample.map(({ path, description }) => (
				<li
					key={path}
					onClick={() => navigation(path)}>
					<p>{description}</p>
				</li>
			))}
		</ul>
	);
};
