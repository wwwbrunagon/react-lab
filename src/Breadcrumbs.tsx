import { Link, useLocation } from 'react-router-dom';
import { projects } from './core/registry';

export default function Breadcrumbs() {
	const { pathname } = useLocation();

	if (pathname === '/') {
		return null;
	}

	const currentProject = projects.find((project) => project.path === pathname);

	const breadcrumbs = [
		{ path: '/', label: 'Home' },
		{ path: '/', label: 'Projects' },
	];

	if (currentProject) {
		breadcrumbs.push({
			path: currentProject.path,
			label: currentProject.title,
		});
	}

	return (
		<nav className="bg-gray-950 px-6 pt-4 text-sm text-gray-400">
			<ol className="mx-auto flex max-w-5xl items-center gap-2">
				{breadcrumbs.map((crumb, index) => (
					<li key={`${crumb.label}-${crumb.path}`} className="flex items-center gap-2">
						{index > 0 && <span aria-hidden="true">/</span>}
						{index === breadcrumbs.length - 1 ? (
							<span className="text-gray-100">{crumb.label}</span>
						) : (
							<Link className="hover:text-gray-100" to={crumb.path}>
								{crumb.label}
							</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
