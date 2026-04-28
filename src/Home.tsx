import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<div style={{ padding: '24px' }}>
			<h1>React Labs</h1>

			<ul>
				<li>
					<Link to="/project-1">Project 1</Link>
				</li>
				<li>
					<Link to="/project-2">Project 2</Link>
				</li>
			</ul>
		</div>
	);
}
