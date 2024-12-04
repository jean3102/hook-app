import { Link } from 'react-router';

interface ComponentListProps {
	listExample: {
		path: string;
		description: string;
	}[];
}

export const ComponentList = ({ listExample }: ComponentListProps) => {
	return (
		<ul>
			{listExample.map(({ path, description }) => (
				<li key={path}>
					<Link to={path}>{description}</Link>
				</li>
			))}
		</ul>
	);
};
