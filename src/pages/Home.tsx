import { Link } from 'react-router-dom';
import { projects } from '../core/registry';

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-950 text-gray-100">
			<div className="max-w-5xl mx-auto px-6 py-10">
				<header className="mb-10">
					<h1 className="text-4xl font-semibold tracking-tight">React Lab</h1>
					<p className="text-gray-400 mt-2">
						Collection of focused frontend experiments
					</p>
				</header>
				<section>
					<h2 className="text-xl font-medium">Projects</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
						{projects.map((project) => (
							<Link
								key={project.id}
								to={project.path}
								className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 hover:-translate-y-1 transition-all duration-200"
							>
								<h3 className="text-white font-medium">{project.title}</h3>
								<p className="text-gray-400 text-sm">{project.description}</p>
							</Link>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}

//UI is a projection of registry data.
