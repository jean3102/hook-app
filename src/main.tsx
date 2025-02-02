import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router';
import { routes } from './routes';
import { Container } from './layout/Container';

createRoot(document.getElementById('root')!).render(
	<Container>
		<HashRouter>
			<Routes>
				{routes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={element}
					/>
				))}
			</Routes>
		</HashRouter>
	</Container>
);
