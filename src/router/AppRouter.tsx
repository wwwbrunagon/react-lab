import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { projects } from '../core/registry';
import { Suspense } from 'react';

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />

				{projects.map((project) => (
					<Route
						key={project.id}
						path={project.path}
						element={
							<Suspense fallback={<div>Loading</div>}>
								<project.component />
							</Suspense>
						}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

//Routes are generated automatically
//No manual additions required
