import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { routes } from './routes';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			{routes.map(({ path, element }, index) => (
				<Route
					key={index}
					path={path}
					element={element}
				/>
			))}
		</Routes>
	</BrowserRouter>
);
