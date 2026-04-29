import { Link } from 'react-router-dom';

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
						<Link
							to="/project-1"
							className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-200 hover:-translate-y-1"
						>
							<h3 className="text-lg font-medium">Project 1</h3>
							<p className="text-sm text-gray-400 mt-1">
								Short description of the project
							</p>
						</Link>

						<Link
							to="/project-2"
							className="p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 transition-all duration-200 hover:-translate-y-1"
						>
							<h3 className="text-lg font-medium">Project 2</h3>
							<p className="text-sm text-gray-400 mt-1">
								Short description of the project
							</p>
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}

/**
  <ul>
				<li>
					<Link to="/project-1">Project 1</Link>
				</li>
				<li>
					<Link to="/project-2">Project 2</Link>
				</li>
			</ul>
 */
